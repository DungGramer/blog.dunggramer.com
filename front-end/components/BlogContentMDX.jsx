import React from 'react';
import { hydrate } from 'react-dom';

const BlogContentMDX = ({ content }) => {
  const renderedContent = hydrate(content, {
    components: {},
  });

  return <div>{renderedContent}</div>;
};

export default BlogContentMDX;
