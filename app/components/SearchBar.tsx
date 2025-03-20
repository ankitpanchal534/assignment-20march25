'use client';

import { Input } from "@/components/ui/input";
import { SearchProps } from "../types";
import { useState, useEffect } from "react";

export function SearchBar({ posts, onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <Input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full"
      />
    </div>
  );
}