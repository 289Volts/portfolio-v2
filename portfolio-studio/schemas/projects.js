const localeString = {
  title: 'Localized String',
  name: 'localeString',
  type: 'object',
  fields: [
    {
      title: 'English',
      name: 'en',
      type: 'string',
    },
    {
      title: 'Spanish',
      name: 'es',
      type: 'string',
    },
    {
      title: 'French',
      name: 'fr',
      type: 'string',
    },
    {
      title: 'German',
      name: 'de',
      type: 'string',
    },
  ],
}

const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'localeString',
    },
    {
      name: 'problem',
      title: 'Problem',
      type: 'localeString',
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'localeString',
    },
    {
      name: 'results',
      title: 'Results',
      type: 'localeString',
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

export {localeString, projects}
