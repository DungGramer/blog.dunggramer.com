import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {documentI18n, withDocumentI18nPlugin} from '@sanity/document-internationalization'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'back-end',

  projectId: 'o2fxwym0',
  dataset: 'production',

  // plugins: [deskTool(), visionTool()],
  // plugins: [
  //   deskTool(),
  //   visionTool(),
  //   documentI18n({
  //     base: 'vi',
  //     languages: [
  //       {
  //         id: 'en',
  //         title: 'English',
  //       },
  //       {
  //         id: 'vi',
  //         title: 'Vietnamese',
  //       },
  //     ],
  //   }),
  //   codeInput(),
  // ],
  plugins: withDocumentI18nPlugin([
    deskTool(),
    visionTool(),
    codeInput(),
  ], {
    base: 'vi',
    languages: [
      {
        id: 'en',
        title: 'English',
      },
      {
        id: 'vi',
        title: 'Vietnamese',
      },
    ],
  }),

  schema: {
    types: schemaTypes,
  },
})