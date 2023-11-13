'use client';
const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

// Get the first 20 posts from WordPress, ordered by the date
export async function getAllPosts(preview) {
  const data = await fetchAPI(`
      query AllPosts {
        posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
            }
          }
        }
      }
    `);

  return data?.posts;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `
  );
  return data?.posts;
}
