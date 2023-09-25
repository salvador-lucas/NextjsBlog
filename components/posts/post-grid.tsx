import React, { FC } from 'react';
import PostItem from './post-item';
import { PostData } from '@/lib/post-util';
const PostGrid: FC<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <ul>
      {posts.map((p) => (
        <PostItem
          key={p.slug}
          title={p.title}
          date={p.date}
          text={p.text}
          slug={p.slug}
          image={p.image}
          isFeatured={p.isFeatured}
          content={p.title}
        />
      ))}
    </ul>
  );
};

export default PostGrid;
