import { Users, BrainCircuit, Lightbulb } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="hero-pattern pt-20 lg:pt-24 lg:pb-8 pb-4 px-4 sm:px-6 lg:px-8 w-full text-primary-foreground">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto text-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link
                  to="/"
                  className="transition-colors text-muted-foreground hover:text-primary-foreground"
                >
                  Ana Sayfa
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Hakkimizda</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-bold text-left uppercase">Hakkimizda</h1>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-background w-full">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 lg:py-16 py-10">
            <div className="bg-background lg:p-8 p-0 text-right">
              <div className="flex items-center justify-end mb-4">
                <h2 className="text-2xl uppercase">
                  <span className="font-b3">Açik Alan Spor Aletlerinin </span>
                  <br />
                  <span className="font-b2">Arkasindaki </span>
                  <span className="font-b1">fikir</span>
                </h2>
                <Lightbulb
                  className="w-12 h-12 text-primary ml-2"
                  strokeWidth={0.75}
                />
              </div>
              <p className="text-foreground">
                BUTAX, iç ve dış mekan fitness ekipmanları üreten, spor ve
                teknolojiyi birleştiren yenilikçi bir markadır. Kurucularımız
                uzun yıllar vücut geliştirme sporu ile uğraşmış ve Türkiye'de
                spor konusunda doğru ve yeterli kaynak olmadığını
                gözlemlemişlerdir. Bu gözlem, BUTAX'ın kuruluş yolculuğunun
                başlangıç noktası oldu. 2024 yılında 'Spor ve Rekreasyon
                Tesislerinin Kullanım Potansiyelinin Artırılarak Kentsel
                Gelişimin Desteklenmesi' başlıklı araştırma projesinin
                başlatılmasıyla BUTAX'ın misyonu daha da tanımlı hale gelmiştir.
              </p>
            </div>
            <div className="bg-background rounded-lg overflow-hidden">

            </div>
            <div className="bg-background rounded-lg overflow-hidden">

            </div>
            <div className="bg-background lg:p-8 p-0 text-left">
              <div className="flex items-center mb-4">
                <BrainCircuit
                  className="w-12 h-12 text-primary mr-2"
                  strokeWidth={0.75}
                />
                <h2 className="text-2xl uppercase">
                  <span className="font-b1">Bilimden </span>
                  <span className="font-b2">fikirlere </span>
                  <br />
                  <span className="font-b3">açik alan fitness ekipmanlari</span>
                </h2>
              </div>
              <p className="text-foreground">
                Bu proje kapsamında İzmir'in Konak-Alsancak bölgesinde bulunan
                spor ve ekipman tesislerinin kullanım potansiyellerinin
                sistematik olarak araştırılması ve geliştirilmesi amaçlanmıştır.
                Proje kapsamında bu tesis ve ekipmanların sürdürülebilirliği ve
                vandalizme karşı uygunluğu incelenmiş, hem fiziksel hem de
                yönetimsel önlemleri içeren sürdürülebilirlik önerileri
                geliştirilmiştir. Bir TÜBİTAK projesi olarak BUTAX'ın akademik
                ve iş dünyasına ilk adımını atmasını sağladı. Kurucularımız, bu
                girişimden elde edilen bilgi ve deneyimi BUTAX'ın geleceği için
                temel bir yapı taşı olarak benimsedi. BUTAX, inovasyon vizyonu
                ile spor ekipmanlarını teknoloji ile entegre ederek kullanıcı
                deneyimini iyileştirmeyi ve daha verimli bir fitness süreci
                yaratmayı hedeflemektedir. BUTAX, sporu herkes için daha
                erişilebilir, keyifli ve verimli hale getirmek için yenilikçi
                çözümler sunmaya çalışmaktadır.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="hero-pattern py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              MODEL - RENK ve FİYAT DEĞİŞİMİ
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            BUTAX Spor Aletleri ve Kent Mobilyaları Yazılım A.Ş. ® haber vermeksizin ürünlerin modelini, rengini ve fiyatını degistirme hakkını saklı tutar. Katalogda karsılasılabilecek baskı ve tipografi hatalarından hiçbir sekilde BUTAX Spor Aletleri ve Kent Mobilyaları Yazılım A.Ş. sorumlu tutulamaz. Katalogda yer alan ürünlerin tasarım ve resimleri tamamen BUTAX Spor Aletleri ve Kent Mobilyaları Yazılım A.Ş.’na ait olup, baska kisi veya firmalarca kullanılamaz. BUTAX Spor Aletleri ve Kent Mobilyaları Yazılım A.Ş. Head Office
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
