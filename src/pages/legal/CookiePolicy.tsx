
import { useSEO } from "@/hooks/useSEO";

const CookiePolicy = () => {
  useSEO({
    title: "Çerez Politikası | BUTAX",
    description: "BUTAX çerez politikası ve çerezlerin kullanımı hakkında bilgiler.",
    keywords: ["çerez", "cookie", "BUTAX", "çerez politikası"],
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Çerez Politikası</h1>
      <div className="prose prose-lg max-w-none">
        <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Çerez Nedir?</h2>
        <p>Çerezler, web sitemizi ziyaret ettiğinizde cihazınıza yerleştirilen küçük metin dosyalarıdır.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Çerez Türleri</h2>
        <ul className="list-disc pl-6 mt-4">
          <li>Zorunlu Çerezler</li>
          <li>Analitik Çerezler</li>
          <li>İşlevsel Çerezler</li>
          <li>Hedefleme/Reklam Çerezleri</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Çerez Kontrolü</h2>
        <p>Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.</p>
      </div>
    </div>
  );
};

export default CookiePolicy;
