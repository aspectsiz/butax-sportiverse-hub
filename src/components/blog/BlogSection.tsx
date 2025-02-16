// src/components/blog/BlogSection.tsx

import React from 'react';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom'; // veya yönlendirme kütüphaneniz
import { BlogPost } from '@/types/blog'; // BlogPost tipini içe aktar

interface BlogSectionProps {
  latestPosts: BlogPost[]; // BlogPost tipini kullan
}

const BlogSection: React.FC<BlogSectionProps> = ({ latestPosts }) => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-secondary/5 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-12 h-16">
          <h2 className="text-3xl font-bold text-foreground mb-0 text-left uppercase mr-4 align-self-center">Medya Merkezimiz</h2>
          <Link
            to="/blog"
            className="inline-flex items-center justify-center px-6 py-1 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors align-self-center"
          >
            Tüm Yazıları Gör
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;