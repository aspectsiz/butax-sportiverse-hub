
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

interface BlogPostTemplateProps {
  post: BlogPost;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {/* Hero Image */}
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-muted-foreground">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={post.date}>
            {format(new Date(post.date), 'd MMMM yyyy', { locale: tr })}
          </time>
        </div>
      </header>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none">
        {/* Blog content will be rendered here */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Add social share buttons or other actions here */}
          </div>
        </div>
      </footer>
    </article>
  );
};

export default BlogPostTemplate;
