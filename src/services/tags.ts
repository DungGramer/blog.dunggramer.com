import api from "./api";

export async function getTags() {
  const query = `
    query GetTags {
      tags {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const response = (await api(query)) as { data: { tags: TagsResponse } };
  return response?.data?.tags?.nodes || [];
}

export interface TagsResponse {
  nodes: TagNode[];
}

export interface TagNode {
  id: string;
  name: string;
  slug: string;
}
