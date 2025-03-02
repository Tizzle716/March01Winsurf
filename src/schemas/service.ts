import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Bot', value: 'bot' },
          { title: 'Message', value: 'message' },
          { title: 'Share', value: 'share' },
          { title: 'Workflow', value: 'workflow' }
        ]
      }
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.required().integer()
    })
  ]
});
