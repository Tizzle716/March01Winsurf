import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: true, // Enable CDN for better performance
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

// Helper function to generate GROQ queries
export const groq = String.raw;

// Typed fetch helper
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<T> {
  return client.fetch(query, params, {
    cache: 'force-cache',
    next: { tags }
  });
}
