import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';
import Image from 'next/image';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position = 'center' } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <div className="image-container">
            <Image
              src={urlFor(asset).height(600).fit('max').url()}
              alt={alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => <BlockContent serializers={serializers} blocks={content} />;

export default BlogContent;
