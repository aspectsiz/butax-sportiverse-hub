// src/components/blog/BlogCard.tsx

import React from 'react';
import { Card, CardFooter, Image, Button, User, Link } from "@heroui/react"; // HeroUI'dan User ve Link'i de içe aktar
import { BlogPost } from '@/types/blog';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { Link as RouterLink } from 'react-router-dom';

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
        <div className="flex flex-col items-start w-full"> {/* Yazar bilgisini sola yaslamak ve genişliği kontrol etmek için */}
          <User
            avatarProps={{
              src: post.authorAvatar, // Yazarın avatar URL'sini kullan
            }}
            name={post.authorName} // Yazarın adını kullan
            description={
              <RouterLink to={`/author/${post.authorSlug}`} className="text-primary"> {/* Yazar profiline bağlantı ve kırmızı renk */}
                {post.authorUsername} {/* Yazarın kullanıcı adı */}
              </RouterLink>
            }
          />
          <div className="w-full"> {/* Başlığın her zaman sola yaslanmasını sağlamak için */}
            <RouterLink to={`/blog/${post.slug}`}> {/* React Router Link'i ile başlığa bağlantı */}
              <p className="text-small text-left text-primary-foreground">{post.title}</p> {/* Başlık */}
            </RouterLink>
          </div>
          <p className="text-tiny text-primary-foreground">
            {format(new Date(post.date), 'd MMMM yyyy', { locale: tr })}
          </p>
        </div>
        <RouterLink to={`/blog/${post.slug}`}> {/* React Router Link'i ile "Devamını Oku" butonuna bağlantı */}
          <Button
            className="text-tiny text-foreground bg-black/20"
            color="default"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Devamını Oku
          </Button>
        </RouterLink>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;