
import { useParams } from 'react-router-dom';
import { blogPosts } from '@/data/blogData';
import BlogPostTemplate from '@/components/blog/BlogPostTemplate';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Blog yazısı bulunamadı</h1>
        <Link to="/blog" className="text-primary hover:underline">
          Blog'a geri dön
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/" className="text-muted-foreground hover:text-foreground">
                Ana Sayfa
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <BlogPostTemplate post={post} />
    </div>
  );
};

export default BlogPost;
