import { render, screen } from '@testing-library/react';
import { PostCard } from '@/app/components/PostCard';

const mockPost = {
  id: 1,
  title: 'Test Post',
  body: 'Test post body content',
  userId: 1,
};

describe('PostCard', () => {
  it('renders post title and body', () => {
    render(<PostCard post={mockPost} />);
    
    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test post body content')).toBeInTheDocument();
  });

  it('includes a link to the post detail page', () => {
    render(<PostCard post={mockPost} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/posts/1');
  });
});