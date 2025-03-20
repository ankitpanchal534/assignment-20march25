'use client';

import { useState } from 'react';
import { PostCard } from './PostCard';
import { SearchBar } from './SearchBar';
import { Post } from '../types';

export function Posts({ initialPosts }: { initialPosts: Post[] }) {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);

  const handleSearch = (query: string) => {
    const filtered = initialPosts.filter((post: Post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <>
      <SearchBar posts={initialPosts} onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}