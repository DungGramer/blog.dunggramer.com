import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";

const BlogDetail = () => {
  const { query } = useRouter();

  return (
    <PageLayout>
      <h1>Blog Detail</h1>
      <p>Blog slug: {query.slug}</p>
    </PageLayout>
  );
};

export default BlogDetail;
