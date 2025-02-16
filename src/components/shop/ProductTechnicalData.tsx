// ProductTechnicalData.tsx
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Product } from "@/types/product";
import { Divider } from "@heroui/divider";
import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

interface ProductTechnicalDataProps {
  product: Product;
}

const ProductTechnicalData: React.FC<ProductTechnicalDataProps> = ({ product }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(); // useDisclosure hook'u kullanıldı

  const tableData = [
    { label: "Ürün Adı", value: product.name },
    { label: "Ürün Kodu", value: product.productCode },
    {
      label: "Kategori",
      value: product.category
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    },
    { label: "Stok Adedi", value: product.stock },
    { label: "Hedef Bölge", value: product.hedefbolge },
    { label: "Uzunluk", value: product.length },
    { label: "Genişlik", value: product.width },
    { label: "Yükseklik", value: product.height },
    { label: "Ekipman Ağırlığı", value: product.equipmentWeight },
    { label: "Kullanıcı Boy Aralığı", value: product.userHeight },
    { label: "Güvenlik Alanı", value: product.safetyArea },
    {
      label: "Zemin Montajı",
      value: (
        <button onClick={onOpen} className="transition-colors text-primary hover:text-[#006fee]">
          Detaylı Bilgi
        </button>
      ),
    },
    { label: "Standardı", value: product.standard },
    { label: "Üretim Yeri", value: product.countryOfManufacture },
    { label: "Metal Parçalar", value: product.metalParts },
    { label: "Tüp Dayanımı", value: product.tubeStrengths },
    { label: "Kaplama Çözeltisi", value: product.coatingSolution },
    ...(product.specifications ? [
      ...(product.specifications.dimensions ? [
        { label: "Uzunluk (Spesifikasyon)", value: product.specifications.dimensions.length },
        { label: "Genişlik (Spesifikasyon)", value: product.specifications.dimensions.width },
        { label: "Yükseklik (Spesifikasyon)", value: product.specifications.dimensions.height },
      ] : []),
      ...(product.specifications.totalWeight ? [
        { label: "Toplam Ağırlık", value: `${product.specifications.totalWeight} ${product.specifications.weightUnit}` },
      ] : []),
      ...(product.specifications.material ? [
        { label: "Materyal", value: product.specifications.material },
      ] : []),
    ] : [])
  ];

  return (
    <div className="pt-8 px-1 sm:px-6 lg:px-8 w-full">
      <div className="flex items-center gap-2">
        <h2 className="text-md font-medium text-muted-foreground whitespace-nowrap">Ürün Teknik Özellikleri</h2>
        <div className="w-full max-w-full">
          <Divider />
        </div>
      </div>
      <Table isStriped aria-label="Ürün Teknik Özellikleri">
        <TableHeader>
          <TableColumn>Özellik</TableColumn>
          <TableColumn>Değer</TableColumn>
        </TableHeader>
        <TableBody>
          {tableData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.label}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Drawer backdrop="blur" isOpen={isOpen} onOpenChange={onOpen}>
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1 items-start">
                Zemin Montajı Detayları
              </DrawerHeader>
              <DrawerBody>
                <p>
                  Bu ürün, beton zemin üzerine özel dübellerle monte edilmektedir. Montaj talimatları ürünle birlikte verilmektedir.
                </p>
              </DrawerBody>
              <DrawerFooter className="justify-end">
                <Button color="primary" variant="light" onPress={onClose}>
                  Kapat
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProductTechnicalData;