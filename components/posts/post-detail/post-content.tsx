import React, { FC } from 'react';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import { PostData } from '@/lib/post-util';

const PostContent: FC<{ post: PostData }> = ({ post }) => {
  return (
    <article>
      <PostHeader title={post.title} image={post.image} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
