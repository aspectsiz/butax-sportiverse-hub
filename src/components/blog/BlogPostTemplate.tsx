
import React from 'react';
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { User } from "@heroui/react";
import { Link } from 'react-router-dom';

interface BlogPostTemplateProps {
  post: BlogPost;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <User
            avatarProps={{
              src: post.authorAvatar,
            }}
            name={post.authorName}
            description={
              <Link to={`/author/${post.authorSlug}`} className="text-primary hover:underline">
                {post.authorUsername}
              </Link>
            }
          />
          <span className="text-muted-foreground">
            {format(new Date(post.date), 'd MMMM yyyy', { locale: tr })}
          </span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full aspect-video object-cover rounded-lg"
        />
      </header>
      
      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>

      <footer className="mt-8 pt-8 border-t">
        <Link 
          to="/medya-merkezi"
          className="text-primary hover:underline"
        >
          ← Tüm Yazılar
        </Link>
      </footer>
    </article>
  );
};

export default BlogPostTemplate;
