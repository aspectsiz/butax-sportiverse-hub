export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}

interface SEODataMap {
  [key: string]: SEOData;
}

export const seoData: SEODataMap = {
  home: {
    title: "BUTAX Spor Aletleri & Kent Mobilyaları - Premium Çözümler",
    description: "BUTAX ile üstün spor aletleri, kent mobilyaları ve yenilikçi fitness çözümlerini keşfedin. Alanlarınızı dönüştürün, spor deneyiminizi yükseltin! Fiyatlar için iletişime geçin.",
    keywords: ["spor aletleri", "kent mobilyaları", "fitness ekipmanları", "dış mekan fitness", "spor salonu ekipmanları", "BUTAX spor aletleri", "BUTAX kent mobilyaları", "dış mekan spor aletleri", "park spor aletleri"],
    ogImage: "/og-image.png"
  },
  shop: {
    title: "BUTAX Spor Aletleri & Kent Mobilyaları - Online Mağaza",
    description: "Yüksek kaliteli spor aletleri, kent mobilyaları ve spor giyim koleksiyonumuza göz atın. Her ihtiyaca uygun profesyonel fitness çözümleri. Fiyatlar ve daha fazlası için bize ulaşın!",
    keywords: ["spor mağazası", "fitness aletleri", "spor salonu malzemeleri", "kent mobilyaları", "spor giyim", "BUTAX mağaza", "BUTAX spor ürünleri", "uygun fiyatlı spor ekipmanları"],
  },
  hakkimizda: {
    title: "BUTAX Hakkında - Spor ve Kent Yaşamına Değer Katıyoruz",
    description: "BUTAX'ın dış mekan fitness ve kent spor ekipmanlarında devrim yaratma yolculuğunu öğrenin. Misyonumuzu ve yeniliğe olan bağlılığımızı keşfedin. Bizi daha yakından tanıyın!",
    keywords: ["BUTAX hakkında", "şirket geçmişi", "fitness yeniliği", "spor teknolojisi", "kentsel gelişim", "dış mekan fitness", "BUTAX misyonu", "BUTAX vizyonu"],
  },
  franchise: {
    title: "BUTAX Franchise - Kendi İşinizi Kurma Fırsatı",
    description: "BUTAX ile franchise fırsatlarını keşfedin. Büyüyen başarılı spor aletleri ve kent mobilyaları işletmeleri ağımıza katılın. Avantajlı franchise fırsatları için başvurun!",
    keywords: ["BUTAX franchise", "iş fırsatı", "fitness franchise", "spor işi", "kent mobilyaları franchise", "girişimcilik", "bayilik", "franchise şartları"],
  },
  contact: {
    title: "BUTAX İletişim - Size Yardımcı Olmaya Hazırız",
    description: "Spor aletlerimiz, kent mobilyalarımız veya franchise fırsatlarımız hakkında sorularınız için BUTAX ile iletişime geçin. Size yardımcı olmak için buradayız. Fiyat teklifi almak için hemen formumuzu doldurun!",
    keywords: ["BUTAX iletişim", "müşteri desteği", "satış sorgusu", "franchise bilgisi", "iletişim formu", "destek"],
  },
  'acik-alan-spor-aleti': {
    title: "Spor Aletleri - BUTAX'tan Kaliteli Çözümler",
    description: "Premium spor aletleri koleksiyonumuzu keşfedin. Her antrenman ihtiyacına uygun profesyonel fitness çözümleri. Kampanyalı ürünlerimiz için takipte kalın!",
    keywords: ["spor aletleri", "fitness ekipmanları", "spor salonu ekipmanları", "antrenman malzemeleri", "BUTAX spor aletleri", "en iyi spor ekipmanları", "kaliteli spor aletleri"],
  },
  'kent-mobilyalari': {
    title: "Kent Mobilyaları - BUTAX ile Şehirlerinizi Güzelleştirin",
    description: "Modern kent mobilyaları koleksiyonumuza göz atın. Kamusal alanlar için dayanıklı ve şık çözümler. Projeleriniz için özel fiyat teklifi alın!",
    keywords: ["kent mobilyaları", "dış mekan mobilyaları", "kamusal alan mobilyaları", "sokak mobilyaları", "BUTAX mobilyaları", "park mobilyaları", "belediye mobilyaları"],
  },
  'spor-giyim': {
    title: "Spor Giyim - BUTAX'tan Performans Artıran Şıklık",
    description: "Maksimum performans için yüksek kaliteli spor giyim ürünlerimizi satın alın. Konforlu ve dayanıklı atletik giyim. Yeni sezon ürünlerimizi inceleyin!",
    keywords: ["spor giyim", "atletik giyim", "spor kıyafetleri", "antrenman giyim", "BUTAX spor giyim", "erkek spor giyim", "kadın spor giyim"],
  },
};