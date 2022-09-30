// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

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
          title: 'Name'
        },
        {
          name: 'username',
          type: 'slug',
          title: 'Username',
        },
        {
          name: 'avatar',
          type: 'image',
          title: 'Avatar'
        },
        {
          name: 'bio',
          type: 'text',
          title: 'Bio'
        },
        
      ]
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
          validation: Rule => Rule.required().min(10)
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle'
        },
        {
          name: 'coverImage',
          type: 'image',
          title: 'Cover Image',
          fields: [
            {
              name: 'alt',
              type: 'text',
              title: 'Description',
            }
          ],
          options: {
            hotspot: true
          }
        },
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [
            {
              type: 'block'
            },
            {
              type: 'image',
              fields: [
                {
                  title: 'Image Position',
                  name: 'position',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Center', value: 'center'},
                      {title: 'Left', value: 'left'},
                      {title: 'Right', value: 'right'},
                    ],
                    layout: 'radio',
                    isHighlighted: true
                  }
                },
                {
                  name: 'alt',
                  type: 'text',
                  title: 'Alternative Text',
                  options: {
                    isHighlighted: true
                  }
                }
              ]
            },
            {
              type: 'code',
              options: {
                withFilename: true
              }
            }
          ],
          options: {
            hotspot: true
          }
        },
        {
          name: 'date',
          type: 'datetime',
          title: 'Date',
          validation: Rule => Rule.required()
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: {type: 'author'},
          validation: Rule => Rule.required()
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
        }
      ]
    }
  ]),
})
