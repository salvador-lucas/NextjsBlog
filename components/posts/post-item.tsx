import { PostData } from '@/lib/post-util';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

const PostItem: FC<PostData> = ({ title, date, text, image, slug }) => {
  const formatedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li>
      <Link href={`/posts/${slug}`}>
        <div>
          <Image src={`/images/posts/${image}`} alt={title} width={300} height={200} />
        </div>
        <div>
          <h3>{title}</h3>
          <time>{formatedDate}</time>
          <p>{text}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
