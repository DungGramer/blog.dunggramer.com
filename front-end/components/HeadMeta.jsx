import Head from 'next/head';
import React from 'react';

const HeadMeta = () => {
  return (
    <Head>
      <title>DungGramer Blog</title>
      <meta name="title" content="DungGramer Blog" />
      <meta name="description" content="This is friendly blog I share my knowledge of Front-end developers, focus on JavaScript, React, CSS, and more!" />
      <meta name="keywords" content="react,reactjs,react component,component,css,js,javascript,html" />
      <meta name="copyright"content="DungGramer" />

      <meta name="author" content="DungGramer" />
      <meta name="owner" content="DungGramer" />
      <meta name="reply-to" content="dung.dev.gramer@gmail.com" />
      <meta name="og:email" content="dung.dev.gramer@gmail.com" />
      <meta name="og:phone_number" content="+84334565999" />
      <meta name="twitter:creator" content="@DungGramer" />
      <link rel="me" href="https://dunggramer.com" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://blog.dunggramer.com/" />
      <meta property="og:title" content="DungGramer Blog" />
      <meta property="og:description" content="This is friendly blog I share my knowledge of Front-end developers, focus on JavaScript, React, CSS, and more!" />
      <meta property="og:image" content="https://cdn.sanity.io/images/n902zx7u/production/5fcdfce17d601928819b14a54dd7c869ff2bef85-851x700.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://blog.dunggramer.com/" />
      <meta property="twitter:title" content="DungGramer Blog" />
      <meta property="twitter:description" content="This is friendly blog I share my knowledge of Front-end developers, focus on JavaScript, React, CSS, and more!" />
      <meta property="twitter:image" content="https://cdn.sanity.io/images/n902zx7u/production/5fcdfce17d601928819b14a54dd7c869ff2bef85-851x700.jpg" />

      {/* Google + tags */}
      <meta itemprop="name" content="DungGramer Blog" />
      <meta itemprop="description" content="This is friendly blog I share my knowledge of Front-end developers, focus on JavaScript, React, CSS, and more!" />
      <meta itemprop="image" content="https://cdn.sanity.io/images/n902zx7u/production/5fcdfce17d601928819b14a54dd7c869ff2bef85-851x700.jpg" />

      {/* Swift tags */}
      <meta class="swiftype" name="title" data-type="string" content="DungGramer Blog" />
      <meta class="swiftype" name="body" data-type="text" content="This is friendly blog I share my knowledge of Front-end developers, focus on JavaScript, React, CSS, and more!" />
      <meta class="swiftype" name="url" data-type="enum" content="https://blog.dunggramer.com/" />
      <meta class="swiftype" name="tags" data-type="string" content="react" />
      <meta class="swiftype" name="tags" data-type="string" content="reactjs" />
      <meta class="swiftype" name="tags" data-type="string" content="react component" />
      <meta class="swiftype" name="tags" data-type="string" content="css" />
      <meta class="swiftype" name="tags" data-type="string" content="js" />
      <meta class="swiftype" name="tags" data-type="string" content="javascript" />

      {/* Configuring prefetching */}
      {/* <meta http-equiv="x-dns-prefetch-control" content="on"/> */}
      {/* <link rel="dns-prefetch" href="http://example.com"></link> */}

      {/* Orientation */}
      <meta name="screen-orientation" content="portrait" />
      <meta name="x5-orientation" content="portrait"/>
      <meta name="full-screen" content="yes"/>
      <meta name="x5-fullscreen" content="ture"/>
      <meta name="x5-page-mode" content="app"/>
      <meta name="browsermode" content="application"/>

      {/* IE */}
      <meta name="renderer" content="webkit|ie-comp|ie_stand" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta http-equiv="cleartype" content="on" />

      {/* UC Mobile Browser */}
      {/* Display this page in fullscreen */}
      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />
      <meta name="viewport" content="uc-fitscreen=yes"/>

      {/* Crawling: All Search Engines */}
      <meta name="robots" content="index,follow,noodp" />
      <meta name="googlebot" content="index,follow" />
      <meta name="yandex" content="all"/>
      <meta name="search.scope" content="webmaster"/>
      <meta name="search.language" content="en-US"></meta>
      <meta name="search.language" content="vi-VN"></meta>

      {/* Google Search Console */}
      <meta name="google-site-verification" content="prwHdXoCEz9yDjKyiN97vzyHAFru5kzUSblYPBsWE8s" />


      {/* Show Image even in text only mode */}
      <meta name="imagemode" content="force" />
    </Head>
  );
};

export default HeadMeta;
