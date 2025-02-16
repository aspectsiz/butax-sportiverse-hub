
import React from 'react';
import { Card, CardFooter, Image, Button, User } from "@heroui/react";
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card isFooterBlurred className="border-none w-full" radius="lg">
      <Image
        alt={post.title}
        className="object-cover"
        height={300}
        src={post.imageUrl}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <div className="flex flex-col items-start w-full">
          <User
            avatarProps={{
              src: post.authorAvatar,
            }}
            name={post.authorName}
            description={
              <Link to={`/author/${post.authorSlug}`} className="text-primary">
                {post.authorUsername}
              </Link>
            }
          />
          <div className="w-full">
            <Link to={`/medya-merkezi/${post.slug}`}>
              <p className="text-small text-left text-primary-foreground">{post.title}</p>
            </Link>
          </div>
          <p className="text-tiny text-primary-foreground">
            {format(new Date(post.date), 'd MMMM yyyy', { locale: tr })}
          </p>
        </div>
        <Link to={`/medya-merkezi/${post.slug}`}>
          <Button
            className="text-tiny text-foreground bg-black/20"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Devamını Oku
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
