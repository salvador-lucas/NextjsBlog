import React, { FC } from 'react';
import PostGrid from '../posts/post-grid';
import { PostData } from '@/lib/post-util';

const FeaturedPosts: FC<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <section>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
