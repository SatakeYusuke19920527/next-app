import Link from 'next/link';

type PropsType = {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

export default function Post({ post }: PropsType) {
  return (
    <div>
      <span>{post.id}</span>
      {' : '}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
}
