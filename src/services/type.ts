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