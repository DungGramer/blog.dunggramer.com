import api from "./api";

export function getPosts() {
  return api(`
    query GetPosts {
      posts {
        nodes {
          id
          title
          date
          categories {
            nodes {
              name
            }
          }
          slug
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
        pageInfo {
          hasNextPage
        }
      }
    }
  `) as Promise<getPostsResponse>;
}

export interface getPostsResponse {
  data: {
    posts: Posts;
  };
}

export interface Posts {
  nodes: PostsNode[];
  pageInfo: PageInfo;
}

export interface PostsNode {
  id: string;
  title: string;
  date?: string;
  categories: Categories;
  slug: string;
  tags: Categories;
  featuredImage: FeaturedImage | null;
}

export interface Categories {
  nodes: CategoriesNode[];
}

export interface CategoriesNode {
  name: string;
}

export interface PageInfo {
  hasNextPage: boolean;
}

export interface FeaturedImage {
  node: FeaturedImageNode;
}

export interface FeaturedImageNode {
  link: string;
}
