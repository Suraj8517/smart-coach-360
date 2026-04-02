import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),

    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),

    // ✅ ADD THESE
    defineField({
      name: 'partNumber',
      title: 'Part Number',
      type: 'number',
    }),

    defineField({
      name: 'difficultyLevel',
      title: 'Difficulty Level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
        ],
        layout: 'radio',
      },
    }),

    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),

    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
})