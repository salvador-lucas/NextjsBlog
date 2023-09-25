import PostContent from '@/components/posts/post-detail/post-content';
import { PostData, getAllPosts, getPostData } from '@/lib/post-util';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';

const PostPage: NextPage<{ post: PostData }> = ({ post }) => {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.content} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((p) => ({
    params: {
      slug: p.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postSlug = context?.params?.slug as string;
  const postData = getPostData(postSlug);

  return {
    props: { post: postData },
    revalidate: 600,
  };
};

export default PostPage;
