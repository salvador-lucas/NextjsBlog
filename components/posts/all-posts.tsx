import React, { FC } from 'react';
import PostGrid from './post-grid';
import { PostData } from '@/lib/post-util';

const AllPosts: FC<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <section>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
