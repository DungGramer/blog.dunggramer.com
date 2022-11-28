import { getSanityContent } from 'lib/sanity';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/atom-one-dark.css';

import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export default function Page({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <p>{frontmatter.date}</p>
      <article>
        <Component />
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getSanityContent({
    query: `
      query PageBySlug($slug: String!) {
        allBlog(where: { slug: { current: { eq: $slug } } }) {
          title
          content
        }
      }
    `,
    variables: {
      slug: params.page,
    },
  });

  const [pageData] = data.allBlog;

  const { code, frontmatter } = await bundleMDX({
    source: pageData.content,
    mdxOptions({ rehypePlugins }) {
      return {
        rehypePlugins: [...(rehypePlugins ?? []), rehypeHighlight],
      };
    },
  });

  return {
    props: {
      code,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const data = await getSanityContent({
    query: `
    query ALlPages {
      allBlog {
        slug {
          current
        }
      }
    }
    `,
  });

  const pages = data.allBlog;

  return {
    paths: pages?.map((p) => `/${p.slug.current}`),
    fallback: false,
  };
}
