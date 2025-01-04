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
    title: "BUTAX Sports - Premium Sports Equipment & Urban Furniture",
    description: "Discover premium sports equipment, urban furniture, and innovative fitness solutions. Transform your space and elevate your fitness journey with BUTAX.",
    keywords: ["sports equipment", "urban furniture", "fitness equipment", "outdoor fitness", "gym equipment", "BUTAX sports"],
    ogImage: "/og-image.png"
  },
  shop: {
    title: "Shop BUTAX Sports Equipment & Fitness Gear",
    description: "Browse our collection of high-quality sports equipment, urban furniture, and sportswear. Professional-grade fitness solutions for every need.",
    keywords: ["sports shop", "fitness equipment", "gym gear", "urban furniture", "sportswear", "BUTAX store"],
  },
  about: {
    title: "About BUTAX - Our Story & Mission",
    description: "Learn about BUTAX's journey in revolutionizing outdoor fitness and urban sports equipment. Discover our mission and commitment to innovation.",
    keywords: ["about BUTAX", "company history", "fitness innovation", "sports technology", "urban development", "outdoor fitness"],
  },
  franchise: {
    title: "BUTAX Franchise Opportunities",
    description: "Explore franchise opportunities with BUTAX. Join our growing network of successful fitness equipment and urban furniture businesses.",
    keywords: ["BUTAX franchise", "business opportunity", "fitness franchise", "sports business", "urban furniture franchise"],
  },
  contact: {
    title: "Contact BUTAX - Get in Touch",
    description: "Contact BUTAX for inquiries about our sports equipment, urban furniture, or franchise opportunities. We're here to help.",
    keywords: ["contact BUTAX", "customer support", "sales inquiry", "franchise information", "location"],
  }
};