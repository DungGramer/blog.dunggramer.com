import { DEFAULT_LANGUAGE, type LANGUAGES } from "../i18n/languages";
import api from "./api";
import { MediaItemSizeEnum } from "./graphql-type";
import type { DefaultResponse, Post } from "./type";

export interface GetPostParams {
  id: string;
  idType: "DATABASE_ID" | "SLUG" | "URI" | "ID";
  language?: LANGUAGES;
  size?: MediaItemSizeEnum;
}

export const getPostDetail = async (params: GetPostParams) => {
  const { id, idType = "SLUG", language = DEFAULT_LANGUAGE, size } = params;

  const query = `
    query GetBlogById($id: ID!, $idType: PostIdType!, $language: LanguageCodeEnum!, $size: MediaItemSizeEnum) {
      post(id: $id, idType: $idType) {
        date
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl(size: $size)
          }
        }
        translation(language: $language) {
          title
          content
          categories {
            nodes {
              name
              link
            }
          }
          tags {
            nodes {
              name
              link
            }
          }
        }
      }
    }
  `;

  const variables: GetPostParams = { idType, language, ...params, };
  console.log(`📕 variables - 51:post.ts \n`, variables);
  const response = (await api(
    query,
    variables
  )) as DefaultResponse<GetPostResponse>;
  return response?.data || null;
};

export interface GetPostResponse {
  post: {
    date: string;
    author: {
      node: {
        name: string;
      };
    };
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
    translation: {
      title: string;
      content: string;
      categories: {
        nodes: Array<{
          name: string;
          link: string;
        }>;
      };
      tags: {
        nodes: Array<{
          name: string;
          link: string;
        }>;
      };
    };
  } | null;
}
