import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'ai-automations-unstoppable',
  title: 'AI Automations Unstoppable',

  projectId: 'vgztws2n',
  dataset: 'production',
  apiVersion: '2024-03-02',

  plugins: [
    deskTool(),
    visionTool(), // Add vision tool for GROQ playground
  ],

  schema: {
    types: [
      {
        name: 'service',
        title: 'Service',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Lucide icon name',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      {
        name: 'testimonial',
        title: 'Testimonial',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'role',
            title: 'Role',
            type: 'string',
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'content',
            title: 'Content',
            type: 'text',
            validation: (Rule) => Rule.required(),
          },
        ],
      },
      {
        name: 'post',
        title: 'Blog Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
          },
          {
            name: 'image',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            validation: (Rule) => Rule.max(200),
          },
          {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [
              {
                type: 'block',
              },
              {
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
});
