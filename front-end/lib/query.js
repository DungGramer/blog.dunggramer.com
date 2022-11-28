const articleInfo = `
  title
  coverImage {
    asset {
      url
    }
  }
  date
  author {
    name
    avatar {
      asset {
        url
      }
    }
  }
  slug {
    current
  }
  tags
`;

const Query = {
  AllPages: `
    query AllPages {
      allBlog {
        title
        slug {
          current
        }
      }
    }
  `,
  BlogBySlug: `
    query BlogBySlug($slug: String!) {
      allBlog(where: { slug: { current: { eq: $slug } } }) {
        title
        coverImage {
          asset {
            url
          }
        }
        content
        date
        author {
          name
          avatar {
            asset {
              url
            }
          }
        }
        slug {
          current
        }
        tags
      }
    }
  `,
  PaginatedBlogs: `
    query PaginatedBlogs($offset: Int!, $limit: Int!, $sort: SortOrder!) {
      allBlog(limit: $limit, offset: $offset, sort: { date: $sort }) {
        ${articleInfo}
      }
    }
  `,
  BlogByTag: `
    query BlogByTag($tag: String!) {
      allBlog(where: { tags: { elemMatch: { tag: { eq: $tag } } } }) {
        ${articleInfo}
      }
    }
  `,
  BlogByAuthor: `
    query BlogByAuthor($author: String!) {
      allBlog(where: { author: { name: { eq: $author } } }) {
        ${articleInfo}
      }
    }
  `,
  BlogByDate: `
    query BlogByDate($date: Date!) {
      allBlog(where: { date: { eq: $date } }) {
        ${articleInfo}
      }
    }
  `,
  BlogByDateRange: `
    query BlogByDateRange($startDate: Date!, $endDate: Date!) {
      allBlog(where: { date: { gte: $startDate, lte: $endDate } }) {
        ${articleInfo}
      }
    }
  `,
};

export default Query;
