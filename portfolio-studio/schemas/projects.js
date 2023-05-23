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
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
    },
    {
      name: 'bannerImg',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
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
