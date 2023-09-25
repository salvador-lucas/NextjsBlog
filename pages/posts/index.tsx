import AllPosts from '@/components/posts/all-posts';
import { PostData, getAllPosts } from '@/lib/post-util';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const AllPostsPage: NextPage<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>All Blog Posts</title>
      </Head>
      <AllPosts posts={posts} />;
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getAllPosts();

  return {
    props: { posts: featuredPosts },
    revalidate: 600,
  };
};

export default AllPostsPage;
