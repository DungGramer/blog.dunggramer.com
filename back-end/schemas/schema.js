// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import { toSlug } from '../utils';
import contentMarkDown from './contentMarkDown';
import content from './content';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
        },
        {
          name: 'username',
          type: 'slug',
          title: 'Username',
        },
        {
          name: 'avatar',
          type: 'image',
          title: 'Avatar',
        },
        {
          name: 'bio',
          type: 'text',
          title: 'Bio',
        },
      ],
    },
    {
      name: 'blog',
      type: 'document',
      title: 'Blog',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required().min(3),
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle',
        },
        {
          name: 'coverImage',
          type: 'image',
          title: 'Cover Image',
          options: {
            hotspot: true,
          },
        },
        // content,
        contentMarkDown,
        {
          name: 'date',
          type: 'datetime',
          title: 'Date',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: { type: 'author' },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          options: {
            source: (doc) => {
              // const date = new Date(doc.date).toISOString().slice(0, 10);
              // return `${date}/${doc.title}`;
              return toSlug(doc.title);
            },
            slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
          },
        },
      ],
    },
  ]),
});
