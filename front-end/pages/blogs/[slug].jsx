import BlogHeader from 'components/BlogHeader';
import PageLayout from 'components/PageLayout';
import { getAllBlogs, getBlogBySlug, onBlogUpdate, urlFor } from 'lib/api';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import PreviewAlert from 'components/PreviewAlert';
import { format } from 'date-fns';

import rehypeHighlight from 'rehype-highlight';
import { bundleMDX } from 'mdx-bundler';

import dynamic from 'next/dynamic';

const BlogContentCSR = dynamic(
  () => import('components/BlogContent'),
  { ssr: false }
)

const BlogDetail = ({ blog: initialBlog, content, preview }) => {
  const router = useRouter();
  const [blog, setBlog] = useState(initialBlog);

  useEffect(() => {
    let sub;
    if (preview) {
      sub = onBlogUpdate(blog.slug).subscribe((update) => {
        setBlog(update.result);
      });
    }

    return () => sub?.unsubscribe();
  }, []);

  // if (!router.isFallback && !blog?.slug) {
  //   return <ErrorPage statusCode="404"/>
  // }

  if (router.isFallback) {
    return <PageLayout className="blog-detail-page">Loading...</PageLayout>;
  }

  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <PreviewAlert />}
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={
              blog.coverImage
                ? urlFor(blog.coverImage).height(600).url()
                : 'https://picsum.photos/1200/600'
            }
            author={blog.author}
            date={format(new Date(blog.date), 'MMMM do, yyyy')}
          />
          <hr />
          {content && <BlogContentCSR code={content.code} frontmatter={content.frontmatter} />}
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const blog = await getBlogBySlug(params.slug, preview);

  const { code, frontmatter } = await bundleMDX({
    source: blog.content,
    mdxOptions({ rehypePlugins }) {
      return {
        rehypePlugins: [...(rehypePlugins ?? []), rehypeHighlight],
      };
    },
  });

  return {
    props: { blog, preview, content: { code, frontmatter } },
    revalidate: 1,
  };
}

// TODO: Introduce fallback
export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((b) => ({ params: { slug: b.slug } }));
  return {
    paths,
    fallback: true,
  };
}

export default BlogDetail;
