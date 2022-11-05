import { getSanityContent } from 'lib/sanity';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

export default function Page({ title, content, preview }) {
  return (
    <div>
      <h1>{title}</h1>
      <MDXRemote {...content} />
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
    query: `
      query PageBySlug($slug: String!) {
        allBlog(where: { slug: { current: { eq: $slug } } }) {
          title
          content
        }
      }
    `,
    variables: {
      slug: params.page,
    },
  });

  const [pageData] = data.allBlog;

  const content = await serialize(pageData.content, {
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  });

  return {
    props: {
      pageData,
      title: pageData.title,
      content,
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
    query ALlPages {
      allBlog {
        slug {
          current
        }
      }
    }
    `,
  });

  const pages = data.allBlog;

  return {
    paths: pages?.map((p) => `/${p.slug.current}`),
    fallback: false,
  };
}
