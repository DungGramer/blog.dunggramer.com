import { DEFAULT_LANGUAGE, type LANGUAGES } from "../i18n/languages";
import api from "./api";
import type { DefaultResponse, PageInfo, PostNode } from "./type";

export async function getPosts(params: GetPostsParams) {
  const {
    language = DEFAULT_LANGUAGE,
    search,
    category,
    tag,
    after,
    first = 10,
  } = params;

  const query = `
    query GetPosts(
      $language: LanguageCodeFilterEnum!
      $search: String
      $category: String
      $tag: String
      $after: String
      $first: Int
    ) {
      posts(
        where: {
          language: $language
          search: $search
          categoryName: $category
          tag: $tag
        }
        first: $first
        after: $after
      ) {
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
        pageInfo {
          hasNextPage
        }
      }
    }
  `;

  const variables: GetPostsParams = { language, first, ...params };
  const response = await api<DefaultResponse<GetPostsResponse>>(
    query,
    variables
  );
  return response?.data || null;
}
export interface GetPostsParams {
  language?: LANGUAGES;
  search?: string;
  category?: string; // Category slug or ID
  tag?: string; // Tag slug or ID
  after?: string; // Cursor for pagination
  first?: number; // Number of posts to fetch
}
export interface GetPostsResponse {
  posts: {
    nodes: PostNode[];
    pageInfo: PageInfo;
  };
}
