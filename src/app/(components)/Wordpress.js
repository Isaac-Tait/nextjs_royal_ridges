'use client';
import { getAllPosts } from '../(lib)/api';

export default function Wordpress({ allPosts }) {
  const post = allPosts && allPosts.edges[0]?.node;

  return (
    <div>
    {post && <p className='text-3xl'>{post.title}</p>}
    </div>
  );
}

export async function getStaticProps() {
    const allPosts = await getAllPosts();
  
    return {
      props: {
        allPosts,
      },
    };
  }
