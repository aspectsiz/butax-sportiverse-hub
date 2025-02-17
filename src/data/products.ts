import { Product } from '@/types/product';

// Geçici resimler
const squarePlaceholder = "https://placehold.co/1920x1080";

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Bench Press Aleti',
    description: 'Ayarlanabilir Bench Press ile konforlu ve etkili bir egzersiz deneyimi yaşayin. Yüksek kaliteli malzemelerle üretilmiştir.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 10,
    slug: 'modern-park-spor-aleti-bench-press',
    rating: 4.8,
    sales: '16',
    isBestSeller: false,
    isAdvantageous: true,
    isLowPrice: true,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, bench press, diş mekan spor aleti, açik hava fitness, diş mekan fitness aleti, park spor aleti, park antrenmani',
    metaDescription: 'Ayarlanabilir Bench Press ile konforlu ve etkili bir egzersiz deneyimi yaşayin. Yüksek kaliteli malzemelerle üretilmiştir.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '6',
    hedefbolge: 'Göğüs',
    length: '2730 mm',
    width: '930 mm',
    height: '1430 mm',
    equipmentWeight: '164,2 kg (1 x ağırlık birimi), 223,4 kg (2 x ağırlık birimi)',
    userHeight: '+140 cm',
    safetyArea: '18,1 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama, Elektropolisaj',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'BP001'
  },
  {
    id: '2',
    name: 'Biceps Curl Aleti',
    description: 'Dayanıklı malzemelerden üretilmiş ve kol kaslarınızı geliştirmek için tasarlanmış kompakt biceps curl aleti.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 5,
    slug: 'modern-park-spor-aleti-biceps-curl',
    rating: 4.7,
    sales: '16',
    isBestSeller: true,
    isAdvantageous: true,
    isLowPrice: false,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, biceps curl, diş mekan spor aleti, açik hava fitness, diş mekan fitness aleti, park spor aleti, park antrenmani',
    metaDescription: 'Kol kaslarınızı hedefleyen dayanıklı Biceps Curl Aleti ile etkili bir egzersiz deneyimi yaşayın. Yüksek kaliteli malzemelerle üretilmiştir.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Biceps',
    length: '2195 mm',
    width: '675 mm',
    height: '1430 mm',
    equipmentWeight: '143,2 kg (1 x ağırlık birimi)',
    userHeight: '+140 cm',
    safetyArea: '18 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama, Elektropolisaj',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'BC002'
  },
  {
    id: '3',
    name: 'Chin Up Bar Aleti',
    description: 'Çok yönlü kullanımıyla hem parkta hem evde rahatlıkla kullanılabilecek dayanıklı Chin Up Bar.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 25,
    slug: 'modern-park-spor-aleti-chin-up-bar',
    rating: 4.9,
    sales: '16',
    isBestSeller: false,
    isAdvantageous: true,
    isLowPrice: true,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, chin up bar, diş mekan spor aleti, açik hava fitness, diş mekan fitness aleti, barfiks çubuğu, park antrenmani',
    metaDescription: 'Chin Up Bar ile vücut ağırlığınızı kullanarak etkili bir üst vücut antrenmanı yapabilirsiniz. Yüksek kaliteli malzemelerle üretilmiştir.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Sırt ve Kol',
    length: '?',
    width: '?',
    height: '?',
    equipmentWeight: '?',
    userHeight: '+140 cm',
    safetyArea: '?',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'CUB003'
  },
  {
    id: '4',
    name: 'Incline Bench Press Aleti',
    description: 'Göğüs kaslarınızı geliştirmek ve farklı eğimlerle antrenman yapmak için ideal Incline Bench Press aleti.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 12,
    slug: 'modern-park-spor-aleti-incline-bench-press',
    rating: 4.6,
    sales: '9',
    isBestSeller: false,
    isAdvantageous: true,
    isLowPrice: false,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, incline bench press, diş mekan spor aleti, açik hava fitness, göğüs kası antrenmanı, park spor aleti, park antrenmani',
    metaDescription: 'Incline Bench Press ile göğüs kaslarınızı daha etkili bir şekilde çalıştırın. Yüksek kaliteli malzemelerle üretilmiş dayanıklı tasarım.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Üst Göğüs',
    length: '2610 mm',
    width: '930 mm',
    height: '1430 mm',
    equipmentWeight: '170,1 kg (1 x ağırlık birimi), 229,3 kg (2 x ağırlık birimi)',
    userHeight: '+140 cm',
    safetyArea: '17,6 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama, elektropolij',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'IBP004'
  },
  {
    id: '5',
    name: 'Lat Pull Down Aleti',
    description: 'Sırt ve kanat kaslarınızı hedefleyen ergonomik tasarımlı Lat Pull Down aleti, açık havada antrenman için mükemmel bir seçimdir.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 8,
    slug: 'modern-park-spor-aleti-lat-pull-down',
    rating: 4.7,
    sales: '16',
    isBestSeller: true,
    isAdvantageous: true,
    isLowPrice: false,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, lat pull down, diş mekan spor aleti, açik hava fitness, sırt kası antrenmanı, park spor aleti, park antrenmani',
    metaDescription: 'Lat Pull Down aleti ile sırt kaslarınızı etkili bir şekilde çalıştırın. Dayanıklı malzemeler ve konforlu tasarımı ile dikkat çeker.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Sırt',
    length: '1845 mm',
    width: '1070 mm',
    height: '1820 mm',
    equipmentWeight: '207,7 kg (1 x ağırlık birimi), 251 kg (2 x ağırlık birimi)',
    userHeight: '+140 cm',
    safetyArea: '15,7 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama, elektropolij',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'LPD005'
  },
  {
    id: '6',
    name: 'Leg Press Aleti',
    description: 'Bacak kaslarınızı geliştirmek için mükemmel bir tercih olan Leg Press aleti, dayanıklı ve ergonomik tasarımıyla dikkat çeker.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 20,
    slug: 'modern-park-spor-aleti-leg-press',
    rating: 4.8,
    sales: '16',
    isBestSeller: false,
    isAdvantageous: true,
    isLowPrice: false,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, leg press, diş mekan spor aleti, açik hava fitness, bacak antrenmanı, park spor aleti, park antrenmani',
    metaDescription: 'Leg Press ile bacak kaslarınızı güçlendirin ve dayanıklılığınızı artırın. Yüksek kaliteli malzemelerle üretilmiştir.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Bacak',
    length: '3120 mm',
    width: '1140 mm',
    height: '1770 mm',
    equipmentWeight: '425 kg',
    userHeight: '+140 cm',
    safetyArea: '23 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'LPA006'
  },
  {
    id: '7',
    name: 'Multi-Fit 3-in-1 Egzersiz Aleti',
    description: 'Leg Raise, Dip ve Chin Up özelliklerini bir arada sunan bu çok yönlü alet, üst vücut ve karın kaslarını etkili bir şekilde çalıştırmak için mükemmeldir.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 3,
    slug: 'modern-park-spor-aleti-multi-fit-3-in-1',
    rating: 4.9,
    sales: '67',
    isBestSeller: true,
    isAdvantageous: true,
    isLowPrice: false,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, leg raise, dip, chin up, çok işlevli spor aleti, diş mekan fitness, üst vücut antrenmanı, park spor aleti, park antrenmani',
    metaDescription: 'Multi-Fit 3-in-1 Egzersiz Aleti ile leg raise, dip ve chin up hareketlerini tek bir alette gerçekleştirin. Sağlam ve ergonomik tasarımlıdır.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Karın, Arka Kol ve Bel',
    length: '1540 mm',
    width: '960 mm',
    height: '2335 mm',
    equipmentWeight: '167 kg',
    userHeight: '+140 cm',
    safetyArea: '16 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'MFE007'
  },
  {
    id: '8',
    name: 'Core Rack',
    description: 'Core Rack, karın, sırt ve core bölgesini hedefleyen etkili bir antrenman aracı olup açık hava kullanımına uygundur.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 35,
    slug: 'modern-park-spor-aleti-core-rack',
    rating: 4.8,
    sales: '300',
    isBestSeller: false,
    isAdvantageous: true,
    isLowPrice: true,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, core rack, diş mekan spor aleti, açik hava fitness, core antrenmanı, park spor aleti, park antrenmani',
    metaDescription: 'Core Rack ile karın ve core bölgenizi güçlendirin. Dayanıklı ve ergonomik tasarımıyla açık hava antrenmanlarına uygundur.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Karın',
    length: '3830 mm',
    width: '1135 mm',
    height: '1430 mm',
    equipmentWeight: '141,2 kg',
    userHeight: '+140 cm',
    safetyArea: '23,3 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'CR008'
  },
  {
    id: '9',
    name: 'Squat',
    description: 'Squat hareketini güvenle ve etkili bir şekilde yapmanıza olanak tanıyan dayanıklı ve ergonomik tasarıma sahip bir spor aleti.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 18,
    slug: 'modern-park-spor-aleti-squat',
    rating: 4.7,
    sales: '16',
    isBestSeller: true,
    isAdvantageous: true,
    isLowPrice: false,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, squat, diş mekan spor aleti, açik hava fitness, bacak kası antrenmanı, park spor aleti, park antrenmani',
    metaDescription: 'Squat spor aleti ile bacak kaslarınızı ve formunuzu güçlendirin. Sağlam yapısı ve ergonomik tasarımıyla açık hava kullanımı için idealdir.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Kalça ve Bacak',
    length: '2045 mm',
    width: '930 mm',
    height: '1545 mm',
    equipmentWeight: '164,4 kg (1 x ağırlık birimi), 223,6 kg (2 x ağırlık birimi)',
    userHeight: '+140 cm',
    safetyArea: '16,4 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama, elektropolij',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'SQ009'
  },
  {
    id: '10',
    name: 'Triceps Press',
    description: 'Triceps kaslarınızı hedefleyerek kol gücünüzü artırmanıza yardımcı olan dayanıklı Triceps Press aleti.',
    category: 'acik-alan-spor-aleti',
    imageUrl: squarePlaceholder,
    images: [squarePlaceholder],
    stock: 42,
    slug: 'modern-park-spor-aleti-triceps-press',
    rating: 4.6,
    sales: '20',
    isBestSeller: false,
    isAdvantageous: true,
    isLowPrice: true,
    isVerifiedSeller: true,
    isVideoAvailable: true,
    normalizedCategory: "Park Spor Donatisi",
    seoKeywords: 'park spor, triceps press, diş mekan spor aleti, açik hava fitness, kol kası antrenmanı, park spor aleti, park antrenmani',
    metaDescription: 'Triceps Press ile kol kaslarınızı şekillendirin ve güçlendirin. Ergonomik tasarımı ile konforlu bir antrenman sunar.',
    campaign: 'Lansmana Özel İndirim',
    ageRange: '+14',
    color1: 'RAL7021',
    color2: 'RAL1037',
    color3: 'RAL5012',
    color4: 'RAL3020',
    color5: 'RAL1019',
    cargodelivery: '9',
    hedefbolge: 'Arka Kol',
    length: '2320 mm',
    width: '670 mm',
    height: '1970 mm',
    equipmentWeight: '152,8 kg (1 x ağırlık birimi)',
    userHeight: '+140 cm',
    safetyArea: '17,5 m²',
    baseMounting: 'Beton Üzerine Yüzey Montajı',
    standard: 'EN16630',
    countryOfManufacture: 'Türkiye',
    metalParts: 'Çelik',
    tubeStrengths: '3-6 mm',
    coatingSolution: 'Çinko ve Toz Boya Kaplama, elektropolij',
    quoteOnly: true,
    specifications: {
      totalWeight: '5-60',
      weightUnit: 'KG',
    },
    price: 0,
    productCode: 'TP010'
  },
].map(product => ({
  ...product,
  images: [product.imageUrl],
  price: 0
}));
