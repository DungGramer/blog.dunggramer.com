import 'highlight.js/styles/atom-one-dark.css';

import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';

export default function BlogContent({ code, frontmatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return <Component />;
}
