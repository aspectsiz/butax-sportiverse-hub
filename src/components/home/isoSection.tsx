import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@heroui/react";

const isoSection = () => {
  const catalogData = [
    {
      name: "Spor Aletleri Kataloğu",
      url: "https://example.com/spor-aletleri-katalogu",
      status: "Güncel",
      year: 2025,
    },
    {
      name: "Açık Alan Spor Aletleri Kataloğu",
      url: "https://example.com/acik-alan-spor-aletleri-katalogu",
      status: "Güncel",
      year: 2025,
    },
    {
      name: "Kent Mobilyaları Kataloğu",
      url: "https://example.com/kent-mobilyalari-katalogu",
      status: "Güncel",
      year: 2025,
    },
  ];

  const statusColorMap = {
    Güncel: "success", // You can customize the colors here
    Yakında: "warning",
    Eski: "danger",
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <img
            className="col-span-1 pb-4"
            src="/assets/iso_9001_2015.png"
            alt="iso 9001 logosu"
          />
          <p className="col-span-7 text-left text-3xl content-start uppercase"> {/* Reduced to col-span-7 */}
            Dünya standartlarinda profesyonel spor ekipmanları üreticisi
          </p>
          {/* Table Section */}
          <div className="col-span-4 row-span-3 py-4 lg:py-0"> {/* Increased to col-span-4 */}
            <Table aria-label="Kataloglar Tablosu">
              <TableHeader>
                <TableColumn>Online Katalog</TableColumn>
                <TableColumn>Durum</TableColumn>
              </TableHeader>
              <TableBody>
                {catalogData.map((catalog, index) => (
                  <TableRow
                    key={index}
                  >
                    <TableCell>
                      <a
                        href={catalog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-danger-500 transition-colors duration-200 block"
                      >
                        {catalog.name}
                      </a>
                    </TableCell>
                    <TableCell>
                      <Chip
                        className="capitalize"
                        color={statusColorMap[catalog.status]}
                        size="sm"
                        variant="flat"
                      >
                        {catalog.year} - {catalog.status}
                      </Chip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Statistics Section */}
          <div className="col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 text-foreground sm:text-center text-left"> {/* Reduced to col-span-7 */}
            <div className="md:col-span-1">
              <h4 className="text-lg sm:text-xl font-semibold ">Parkların</h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold ">
                99.95%
              </p>
              <p className="mt-1 ">
                oranla kullanım sıklığını ve potansiyelini arttırıyoruz.
              </p>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-lg sm:text-xl font-semibold ">
                Türkiye'de
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold ">
                1+
              </p>
              <p className="mt-1 ">
                fazla park ve rekreasyon alanında daha düzgün bir spor
                yapabilmeniz için varız.
              </p>
            </div>
            <div className="md:col-span-1">
              <h4 className="text-lg sm:text-xl font-semibold ">
                Daha mutlu halk
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold ">
                93%
              </p>
              <p className="mt-1 ">
                insanlar butaks spor aletlerini kullanmaktan ve görmekten
                memnun.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default isoSection;