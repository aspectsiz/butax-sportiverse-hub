import {
    Card,
    CardHeader,
    CardFooter,
    Image,
    Button,
    Skeleton,
  } from "@heroui/react";
  import React, { useState, useEffect } from "react";
  import { getCardData } from "@/lib/api";
  
  interface CardProps {
    cardId: number;
    className: string;
    headerContent: React.ReactNode;
    footerContent?: React.ReactNode;
    isFooterBlurred?: boolean;
  }
  
  const MyCard: React.FC<CardProps> = ({
    cardId,
    className,
    headerContent,
    footerContent,
    isFooterBlurred,
  }) => {
    const [loading, setLoading] = useState(true);
    const [cardData, setCardData] = useState<any>(null);
  
    useEffect(() => {
      const loadData = async () => {
        setLoading(true);
        try {
          const data = await getCardData(cardId);
          setCardData(data);
        } catch (error) {
          console.error(`Card ${cardId} veri yükleme hatası:`, error);
        } finally {
          setLoading(false);
        }
      };
  
      loadData();
    }, [cardId]);
  
    return (
      <Card className={className} isFooterBlurred={isFooterBlurred}>
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          {loading ? (
            <>
              <div className="w-full">
                <Skeleton className="w-2/3 rounded-lg">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700"></div>
                </Skeleton>
              </div>
              <div className="w-full mt-2">
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600"></div>
                </Skeleton>
              </div>
            </>
          ) : (
            <>
              <p className="text-tiny text-muted-foreground uppercase font-bold">
                {headerContent}
              </p>
              <h4 className="text-primary-foreground font-medium text-large uppercase">
                {cardData && cardData.title.split(' ').map((word, index, array) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    {index === 0 || index === array.length - 1 ? (
                      <span className="font-bold">{word}</span>
                    ) : (
                      word
                    )}
                  </React.Fragment>
              ))}
              </h4>
            </>
          )}
        </CardHeader>
        {loading ? (
          <Skeleton className="z-0 w-full h-full object-cover rounded-lg" />
        ) : (
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={cardData?.image}
          />
        )}
        {isFooterBlurred && (
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            {loading ? (
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <Skeleton className="w-20 rounded-lg">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700"></div>
                  </Skeleton>
                  <Skeleton className="w-24 rounded-lg">
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 mt-1"></div>
                  </Skeleton>
                </div>
                <Skeleton className="w-16 h-8 rounded-full">
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                </Skeleton>
              </div>
            ) : (
              footerContent
            )}
          </CardFooter>
        )}
      </Card>
    );
  };
  
  const FeaturesSection: React.FC = () => {
    const cardData = [
      { id: 1, className: "col-span-12 sm:col-span-4 h-[300px]", headerContent: "Park Spor Donatilari" },
      { id: 2, className: "col-span-12 sm:col-span-4 h-[300px]", headerContent: "Stil ve Rahatlık" },
      { id: 3, className: "col-span-12 sm:col-span-4 h-[300px]", headerContent: "AR-GE ve ÜR-GE, Bilimsel Çalışmalar" },
      { id: 4, className: "w-full h-[300px] col-span-12 sm:col-span-5", headerContent: "AKILLI BELEDİYELER İÇİN", isFooterBlurred: true, footerContent: <>
      <div><p className="text-black text-tiny">Wifi desteği, Kablolu Kablosuz Şarz desteği</p>
      <p className="text-black text-tiny">Esnek ve Hafif Güneş Panelli Akilli Sistemler</p></div>
      <Button className="text-tiny ml-2" color="primary" radius="full" size="sm">İncele</Button></> },
      { id: 5, className: "w-full h-[300px] col-span-12 sm:col-span-7", headerContent: "Antrenmani Kolaylastir", isFooterBlurred: true, footerContent: 
      <div className="flex flex-grow gap-2 items-center">
      <Image alt="Breathing app icon" className="rounded-full w-16 md:w-10 h-full bg-black" src="https://heroui.com/images/breathing-app-icon.jpeg" />
      <div className="flex flex-col">
      <p className="text-tiny text-muted-foreground text-left">Yediğiniz yemeklerin sadece resmini çekerek tüm değerlerini, kalori kısmında kayıt edip takip edebilirsiniz.</p>
      <p className="text-tiny text-muted-foreground text-left"><span className="font-bold">BUTAFiT mobil uygulamasi yaptığınız hareketleri ve tekrar sayisini kontrol eder</span>ek Antrenman Takibi sağlar.</p>
      </div><Button radius="full" size="sm">İndir</Button></div> },
    ];
  
    return (
      <section className="w-full pt-24 pb-10 bg-secondary/5">
        <div className="gap-2 grid grid-cols-12 grid-rows-2 px-2">
          {cardData.map((card) => (
            <MyCard
              key={card.id}
              cardId={card.id}
              className={card.className}
              headerContent={card.headerContent}
              isFooterBlurred={card.isFooterBlurred}
              footerContent={card.footerContent}
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;