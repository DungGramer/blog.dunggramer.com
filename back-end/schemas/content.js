export default {
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
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
              { title: 'Center', value: 'center' },
              { title: 'Left', value: 'left' },
              { title: 'Right', value: 'right' },
            ],
            layout: 'radio',
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'text',
          title: 'Alternative Text',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      type: 'code',
      options: {
        withFilename: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
