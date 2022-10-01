import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2022-10-02',
}

export default sanityClient(options);