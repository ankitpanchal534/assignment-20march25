# Next.js Blog Project

A modern, responsive blog application built with Next.js with App Router, featuring server-side rendering, static site generation, and client-side search functionality.

## Features

- Server-Side Rendering (SSR) for post detail pages (without getServerSideProps)
- Static Site Generation (SSG) for the home page
- Client-side search functionality
- Responsive design using Tailwind CSS
- Reusable components with shadcn/ui
- Unit testing with Jest and React Testing Library

## Tech Stack

- Next.js 13
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Jest & React Testing Library

## Getting Started

1. Clone the repository ``bash 
git clone https://github.com/ankitpanchal534/assignment-20march25.git
   ```
2. Install dependencies:
   ```bash
   pnpm i
   ```
3. Run the development server:
   ```bash
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing

Run the test suite:
```bash
npm test
```

## Project Structure

- `/app` - Next.js app directory containing pages and components
- `/app/components` - Reusable React components
- `/app/posts` - Dynamic routes for post pages
- `/app/types` - TypeScript type definitions
- `/__tests__` - Test files

## Assumptions

- Using JSONPlaceholder API for demo data
- Client-side search is sufficient for the demo dataset
- Basic error handling is implemented
- Mobile-first responsive design

## Future Improvements

- Add pagination for posts
- Implement server-side search
- Add more comprehensive error handling
- Implement caching strategies
- Add more unit and integration tests