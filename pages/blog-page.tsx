import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/layout';
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Blog: NextPage = (props: any) => {
  return (
    <Layout title="Blog">
      <h1>Blog Page</h1>
      {props.posts.map((post: PostType, index: number) => {
        return <Post post={post} key={index} />;
      })}
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: {
      posts,
    },
  };
};
