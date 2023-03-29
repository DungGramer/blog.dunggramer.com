import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { documentI18n, withDocumentI18nPlugin } from '@sanity/document-internationalization';
import { codeInput } from '@sanity/code-input';
import schema from './schemas/schema';

export default defineConfig({
  name: 'blog.dunggramer.com',
  projectId: 'n902zx7u',
  dataset: 'production',
  plugins: withDocumentI18nPlugin([
    deskTool(),
    documentI18n({
      languages: ['vi', 'en'],
    }),
    codeInput(),
  ]),
  schema: {
    types: schema,
  },
});
