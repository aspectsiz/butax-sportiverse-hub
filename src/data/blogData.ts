
import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Evde Fitness: Başlangıç Rehberi',
    excerpt: 'Ev ortamında etkili egzersiz rutinleri oluşturmak için temel ipuçları ve öneriler.',
    content: 'Lorem ipsum...',
    imageUrl: '/assets/kasli-adam-barfiks-çekiyor.webp',
    date: '2024-03-15',
    author: 'Ahmet Yılmaz',
    slug: 'evde-fitness-baslangic-rehberi'
  },
  {
    id: '2',
    title: 'Doğru Beslenme ile Maksimum Performans',
    excerpt: 'Antrenman öncesi ve sonrası beslenme stratejileri ile performansınızı artırın.',
    content: 'Lorem ipsum...',
    imageUrl: '/assets/duygusal-sporcu-kadın-gücünü-gösteriyor.webp',
    date: '2024-03-10',
    author: 'Ayşe Kaya',
    slug: 'dogru-beslenme-maksimum-performans'
  },
  {
    id: '3',
    title: 'Açık Alan Spor Ekipmanları Bakım Rehberi',
    excerpt: 'Dış mekan fitness ekipmanlarının ömrünü uzatmak için bakım ve koruma önerileri.',
    content: 'Lorem ipsum...',
    imageUrl: '/assets/zarif-kadin-pilates-yapiyor.webp',
    date: '2024-03-05',
    author: 'Mehmet Demir',
    slug: 'acik-alan-spor-ekipmanlari-bakim-rehberi'
  }
];
