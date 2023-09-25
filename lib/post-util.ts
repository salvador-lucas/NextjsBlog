import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postDir = path.join(process.cwd(), 'posts');
export interface PostData {
  slug: string;
  content: string;
  date: string;
  image: string;
  text: string;
  title: string;
  isFeatured: boolean;
}

export const getPostData = (fileIdentifier: string) => {
  const postSlug = fileIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as PostData;

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postDir);
  const posts = postFiles.map((post) => getPostData(post));
  const sorted = posts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sorted;
};

export const getFeaturedPosts = () => {
  const posts = getAllPosts();
  const featuredPosts = posts.filter((p) => p.isFeatured);
  return featuredPosts;
};
