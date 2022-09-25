import PageLayout from "components/PageLayout";
import { getBlogBySlug } from "lib/api";
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

export async function getServerSideProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog,
    },
  };
}

export default BlogDetail;
