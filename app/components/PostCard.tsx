import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PostCardProps } from '../types';

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/posts/${post.id}`} className="block transition-transform hover:scale-[1.02]">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.body}</p>
        </CardContent>
      </Card>
    </Link>
  );
}