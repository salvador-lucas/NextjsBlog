import Image from 'next/image';
import React, { FC } from 'react';

export interface PostHeaderProps {
  title: string;
  image: string;
}

const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Image src={`/images/posts/${image}`} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
