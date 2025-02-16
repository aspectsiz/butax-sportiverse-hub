
import { useSEO } from "@/hooks/useSEO";

const TermsOfUse = () => {
  useSEO({
    title: "Kullanım Şartları | BUTAX",
    description: "BUTAX kullanım şartları ve koşulları hakkında bilgiler.",
    keywords: ["kullanım şartları", "terms", "BUTAX", "koşullar"],
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Kullanım Şartları</h1>
      <div className="prose prose-lg max-w-none">
        <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Kabul Edilen Şartlar</h2>
        <p>BUTAX web sitesini kullanarak aşağıdaki şartları kabul etmiş olursunuz.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hizmet Kullanımı</h2>
        <p>Hizmetlerimizi kullanırken:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>Tüm yerel ve uluslararası yasalara uymalısınız</li>
          <li>Sistemlerimize zarar verecek faaliyetlerde bulunmamalısınız</li>
          <li>Diğer kullanıcıların haklarına saygı göstermelisiniz</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Fikri Mülkiyet</h2>
        <p>BUTAX markası ve içerikleri yasal koruma altındadır. İzinsiz kullanımı yasaktır.</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
