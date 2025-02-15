
import { BlogPost } from '@/types/blog';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
      <Link to={`/blog/${post.slug}`} className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <span className="text-sm text-white">
            {format(new Date(post.date), 'd MMMM yyyy', { locale: tr })}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6 bg-card">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">{post.author}</span>
          <Link
            to={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            Devamını Oku →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
