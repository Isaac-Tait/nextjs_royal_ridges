import { getAllPostsForHome } from '../(lib)/api';

export default function Wordpress({ allPosts, preview }) {
  const post = allPosts && allPosts.edges[0]?.node;

  return (
    <div preview={preview}>
      {post && <p className='text-3xl'>{post.title}</p>}
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
