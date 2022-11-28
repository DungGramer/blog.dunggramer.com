import sanityClient from '@sanity/client';

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2022-10-02',
};


export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const SANITY_URL = 'https://n902zx7u.api.sanity.io/v1/graphql/production/default';

export async function getSanityContent({ query, variables = {}}) {
  const { data } = await fetch(SANITY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      query,
      variables,
    })
  }).then(res => res.json());

  return data;
}
export default sanityClient(options);
