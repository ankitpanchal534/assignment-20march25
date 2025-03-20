export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface SearchProps {
  posts: Post[];
  onSearch: (query: string) => void;
}

export interface PostCardProps {
  post: Post;
}