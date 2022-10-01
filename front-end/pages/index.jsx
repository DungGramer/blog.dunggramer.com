import { useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';
import { useGetBlogsPages } from 'actions/pagination';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import { format } from 'date-fns';

export const BlogList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((blog) =>
      filter.view.list ? (
        <Col key={`${blog.slug}-list`} md="9">
          <CardListItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={format(new Date(blog.date), 'LL')}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={blog.slug} lg="4" md="6">
          <CardItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={format(new Date(blog.date), 'LL')}
            image={blog.coverImage}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      )
    )
  );
};

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">
        <BlogList data={data || [blogs]} filter={filter} />
      </Row>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
