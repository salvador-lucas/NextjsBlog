import React, { Fragment } from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Hero from '@/components/home-page/Hero';
import FeaturedPosts from '@/components/home-page/featured-posts';
import { PostData, getFeaturedPosts } from '@/lib/post-util';

const Home: NextPage<{ posts: PostData[] }> = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>NextJS Blog homepage</title>
        <meta name="description" content="Next Blog" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: { posts: featuredPosts },
    revalidate: 600,
  };
};

export default Home;
