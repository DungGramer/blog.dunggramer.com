import api from "./api";
import type { Post } from "./type";

export const getPostDetail = async (
  postId: string,
  idType: "DATABASE_ID" | "SLUG" = "SLUG"
) => {
  const query = `
    query GetBlogById($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        title
        content
        date
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `;

  const variables = { id: postId, idType };
  const response = (await api(query, variables)) as { data: { post: Post } };
  return response?.data?.post || null;
};
