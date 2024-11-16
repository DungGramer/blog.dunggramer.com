import api from "./api";
import type { PostsNode } from "./posts";

export async function getCategories() {
  const query = `
    query GetCategories {
      categories {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const response = (await api(query)) as {
    data: { categories: CategoriesResponse };
  };
  return response?.data?.categories?.nodes || [];
}

export interface CategoriesResponse {
  nodes: CategoryNode[];
}

export interface CategoryNode {
  id: string;
  name: string;
  slug: string;
}

export async function getPostsByCategory(categorySlug: string) {
  const query = `
    query GetPostsByCategory($slug: String!) {
      category(id: $slug, idType: SLUG) {
        posts {
          nodes {
            id
            title
            date
            slug
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
                link
              }
            }
          }
        }
      }
    }
  `;

  const variables = { slug: categorySlug };
  const response = (await api(query, variables)) as {
    data: { category: { posts: { nodes: PostsNode[] } } };
  };
  return response?.data?.category?.posts?.nodes || [];
}
