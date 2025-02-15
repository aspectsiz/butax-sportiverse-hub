// src/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  date: string;
  authorName: string; // Yazarın tam adı
  authorUsername: string; // Yazarın kullanıcı adı
  authorAvatar: string; // Yazarın avatar resminin URL'si
  authorSlug: string; // Yazarın profil sayfasının URL'si
  slug: string;
}