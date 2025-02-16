// src/pages/Blog.tsx

import { blogPosts } from "@/data/blogData";
import BlogCard from "@/components/blog/BlogCard";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hero-pattern pt-20 lg:pt-24 lg:pb-8 pb-4 px-4 sm:px-6 lg:px-8 w-full text-primary-foreground">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
              <Link
                to="/"
                className="transition-colors text-muted-foreground hover:text-primary-foreground"
              >
                Ana Sayfa
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Medya Merkezi</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-4xl font-bold text-left mb-4 uppercase">
          Medya Merkezi
        </h1>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
