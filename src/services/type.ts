export interface Author {
  node: {
    name: string;
  };
}

export interface Category {
  nodes: {
    name: string;
  }[];
}

export interface Tag {
  nodes: {
    name: string;
  }[];
}

export interface FeaturedImage {
  node: {
    sourceUrl: string;
  };
}

export interface Post {
  title: string;
  content: string;
  date: string;
  author: Author;
  categories: Category;
  tags: Tag;
  featuredImage: FeaturedImage;
}

export interface PostNode {
  id: string;
  title: string;
  date: string;
  slug: string;
  categories: {
    nodes: Array<{ name: string }>;
  };
  tags: {
    nodes: Array<{ name: string }>;
  };
  featuredImage: {
    node: {
      link: string;
    };
  };
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor?: string;
}

export interface DefaultResponse<T> {
  data: T;
  extensions?: {
    debug: [
      {
        type: "DEBUG_LOGS_INACTIVE";
        message: "GraphQL Debug logging is not active. To see debug logs, GRAPHQL_DEBUG must be enabled.";
      }
    ];
  };
}
