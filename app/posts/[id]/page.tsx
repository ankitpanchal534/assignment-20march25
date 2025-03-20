import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Post } from '@/app/types';

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post: Post | null = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground whitespace-pre-wrap">{post.body}</p>
        </CardContent>
      </Card>
    </main>
  );
}