import HomePage from '../components/Homepage'; // Assuming your components are in the components directory
import { getAllPostsForHome } from '../lib/api'; // Assuming your API functions are in the lib directory

export default function Home({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;

  return (
    <div preview={preview}>
      <HomePage />
      <div
        title={heroPost.title}
        coverImage={heroPost.featuredImage}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
}
