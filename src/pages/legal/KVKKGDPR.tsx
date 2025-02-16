
import { useSEO } from "@/hooks/useSEO";

const KVKKGDPR = () => {
  useSEO({
    title: "KVKK ve GDPR | BUTAX",
    description: "BUTAX KVKK ve GDPR uyumluluk bilgileri.",
    keywords: ["KVKK", "GDPR", "BUTAX", "kişisel veri koruma"],
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">KVKK ve GDPR Uyumluluk</h1>
      <div className="prose prose-lg max-w-none">
        <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. KVKK Hakkında</h2>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu olarak yükümlülüklerimiz.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. GDPR Uyumluluk</h2>
        <p>Avrupa Birliği Genel Veri Koruma Tüzüğü (GDPR) kapsamındaki haklarınız:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>Verilerinize erişim hakkı</li>
          <li>Verilerinizin düzeltilmesi hakkı</li>
          <li>Verilerinizin silinmesi hakkı</li>
          <li>Veri taşınabilirliği hakkı</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Veri İşleme İlkeleri</h2>
        <p>Kişisel verileriniz şu ilkeler doğrultusunda işlenir:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>Hukuka ve dürüstlük kurallarına uygunluk</li>
          <li>Doğru ve güncel olma</li>
          <li>Belirli, açık ve meşru amaçlar için işleme</li>
          <li>İşlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma</li>
        </ul>
      </div>
    </div>
  );
};

export default KVKKGDPR;
