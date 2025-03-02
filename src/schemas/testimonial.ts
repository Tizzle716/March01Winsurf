import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
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
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: Rule => Rule.integer()
    })
  ]
});
