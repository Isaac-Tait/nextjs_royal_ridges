import { getAllPostsForHome } from '../(lib)/api';

export default function Wordpress({ allPosts, preview }) {
  const post = allPosts && allPosts.edges[0]?.node;

  return (
    <div preview={preview}>
      {post && (
        <div
          title={post.title}
          // coverImage={post.featuredImage}
          // date={post.date}
          // author={post.author}
          // slug={post.slug}
          // excerpt={post.excerpt}
        />
      )}
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
