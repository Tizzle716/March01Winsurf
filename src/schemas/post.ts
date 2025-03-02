import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'teamMember' }]
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'AI Voice Agents', value: 'voice-agents' },
          { title: 'Text Automation', value: 'text-automation' },
          { title: 'Social Media', value: 'social-media' },
          { title: 'Workflow Automation', value: 'workflow' },
          { title: 'Technology', value: 'technology' },
          { title: 'Business', value: 'business' }
        ]
      }
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.max(200)
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          type: 'code',
          options: {
            language: 'javascript'
          }
        }
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage'
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    }
  }
});
