
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({
    title: "Gizlilik Politikası | BUTAX",
    description: "BUTAX gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler.",
    keywords: ["gizlilik", "privacy", "BUTAX", "kişisel veriler"],
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>
      <div className="prose prose-lg max-w-none">
        <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Genel Bilgilendirme</h2>
        <p>BUTAX olarak kişisel verilerinizin güvenliği konusuna önem veriyoruz. Bu Gizlilik Politikası, verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Toplanan Veriler</h2>
        <p>Hizmetlerimizi kullanırken aşağıdaki bilgiler toplanabilir:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>İsim ve iletişim bilgileri</li>
          <li>Kullanıcı hesap bilgileri</li>
          <li>Ödeme bilgileri</li>
          <li>İnternet protokol (IP) adresi</li>
          <li>Çerez bilgileri</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Verilerin Kullanımı</h2>
        <p>Toplanan veriler şu amaçlarla kullanılır:</p>
        <ul className="list-disc pl-6 mt-4">
          <li>Hizmetlerimizin sağlanması ve iyileştirilmesi</li>
          <li>Müşteri desteği</li>
          <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
