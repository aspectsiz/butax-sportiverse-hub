// src/data/blogData.ts

import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Evde Fitness: Başlangıç ',
    excerpt: 'Ev ortamında etkili egzersiz rutinleri oluşturmak için temel ipuçları ve öneriler.',
    content: `<p>Evde fitness yapmak, sağlıklı bir yaşam için harika bir başlangıç noktasıdır. İşte size yardımcı olacak temel bilgiler:</p>

    <h2>Temel Ekipmanlar</h2>
    <ul>
      <li>Yoga matı</li>
      <li>Direnç bantları</li>
      <li>Hafif dumbell'lar</li>
      <li>Su şişesi</li>
    </ul>

    <h2>Başlangıç Egzersizleri</h2>
    <p>Aşağıdaki egzersizleri günde 15-20 dakika yapabilirsiniz:</p>
    <ul>
      <li>Şınav</li>
      <li>Squat</li>
      <li>Plank</li>
      <li>Mountain climbers</li>
    </ul>`,
    imageUrl: '/assets/kasli-adam-barfiks-çekiyor.webp',
    date: '2024-03-15',
    authorName: 'Ahmet Yılmaz',
    authorUsername: '@ahmet_yilmaz', // Örnek kullanıcı adı
    authorAvatar: '/assets/ahmet-yilmaz-avatar.jpg', // Örnek avatar URL'si
    authorSlug: 'ahmet-yilmaz',
    slug: 'evde-fitness-baslangic-rehberi',
  },
  {
    id: '2',
    title: 'Doğru Beslenme ile Maksimum Performans',
    excerpt: 'Antrenman öncesi ve sonrası beslenme stratejileri ile performansınızı artırın.',
    content: `<p>Sporda başarılı olmak için doğru beslenme stratejileri kritik öneme sahiptir. İşte size yol gösterecek önemli bilgiler:</p>

    <h2>Antrenman Öncesi Beslenme</h2>
    <p>Antrenmanınızdan 2-3 saat önce:</p>
    <ul>
      <li>Kompleks karbonhidratlar</li>
      <li>Orta miktarda protein</li>
      <li>Düşük yağ</li>
      <li>Bol su</li>
    </ul>

    <h2>Antrenman Sonrası Beslenme</h2>
    <p>İlk 30 dakika içinde:</p>
    <ul>
      <li>Hızlı emilen karbonhidratlar</li>
      <li>Kaliteli protein kaynakları</li>
      <li>Elektrolitler</li>
    </ul>

    <h2>Önerilen Besinler</h2>
    <ul>
      <li>Yulaf ezmesi</li>
      <li>Muz</li>
      <li>Yumurta</li>
      <li>Ton balığı</li>
      <li>Badem</li>
      <li>Yeşil yapraklı sebzeler</li>
    </ul>`,
    imageUrl: '/assets/duygusal-sporcu-kadın-gücünü-gösteriyor.webp',
    date: '2024-03-10',
    authorName: 'Ayşe Kaya',
    authorUsername: '@ayse_kaya', // Örnek kullanıcı adı
    authorAvatar: '/assets/ayse-kaya-avatar.jpg', // Örnek avatar URL'si
    authorSlug: 'ayse-kaya',
    slug: 'dogru-beslenme-maksimum-performans',
  },
  {
    id: '3',
    title: 'Açık Alan Spor Ekipmanları Bakım Rehberi',
    excerpt: 'Dış mekan fitness ekipmanlarının ömrünü uzatmak için bakım ve koruma önerileri.',
    content: `<p>Açık alan spor ekipmanlarının düzenli bakımı, hem güvenlik hem de uzun ömürlü kullanım için önemlidir.</p>

    <h2>Temel Bakım İpuçları</h2>
    <ul>
      <li>Düzenli temizlik</li>
      <li>Pas kontrolü</li>
      <li>Civata ve somunların kontrolü</li>
      <li>Yağlama</li>
    </ul>

    <h2>Mevsimsel Bakım</h2>
    <p>Her mevsim başında yapılması gerekenler:</p>
    <ul>
      <li>Kapsamlı temizlik</li>
      <li>Güvenlik kontrolü</li>
      <li>Boyama ve onarım</li>
      <li>Zemin kontrolü</li>
    </ul>`,
    imageUrl: '/assets/zarif-kadin-pilates-yapiyor.webp',
    date: '2024-03-05',
    authorName: 'Mehmet Demir',
    authorUsername: '@mehmet_demir', // Örnek kullanıcı adı
    authorAvatar: '/assets/mehmet-demir-avatar.jpg', // Örnek avatar URL'si
    authorSlug: 'mehmet-demir',
    slug: 'acik-alan-spor-ekipmanlari-bakim-rehberi',
  },
];