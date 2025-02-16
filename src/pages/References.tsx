
import { useSEO } from "@/hooks/useSEO";

const References = () => {
  useSEO({
    title: "Referanslar | BUTAX",
    description: "BUTAX'ın güvenilir iş ortakları ve referansları.",
    keywords: ["referanslar", "references", "BUTAX", "iş ortakları"],
  });

  const references = [
    {
      name: "Spor Salonu A",
      location: "İstanbul",
      description: "Premium spor ekipmanları tedariği",
      year: "2023"
    },
    {
      name: "Fitness Merkezi B",
      location: "Ankara",
      description: "Kompleks fitness ekipmanları kurulumu",
      year: "2022"
    },
    {
      name: "Belediye Parkı C",
      location: "İzmir",
      description: "Açık alan spor aletleri tedariği",
      year: "2023"
    },
    // Add more references as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Referanslarımız</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((ref, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{ref.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{ref.location}</p>
            <p className="mb-2">{ref.description}</p>
            <p className="text-sm text-gray-500">{ref.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
