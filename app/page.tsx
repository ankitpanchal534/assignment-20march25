import { Posts } from './components/Posts';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <Posts initialPosts={posts} />
    </main>
  );
}