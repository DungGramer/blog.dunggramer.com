import PageLayout from "components/PageLayout";
import { getAllBlogs, getBlogBySlug } from "lib/api";
import { useRouter } from "next/router";

const BlogDetail = ({ blog }) => {
  const { query } = useRouter();

  return (
    <PageLayout>
      <h1>Blog Detail</h1>
      <p>Blog slug: {blog?.slug}</p>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();

  return {
    paths: blogs.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: true,
  };
}

export default BlogDetail;
