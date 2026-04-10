import ProductCard from "../../components/ProductCard";

export default function Models() {
  const items = [
    { title: "Sci-fi Robot", price: 49.99 },
    { title: "Building Set", price: 39.99 },
    { title: "Dragon Model", price: 49.99 },
    { title: "Furniture Pack", price: 44.99 },
    { title: "Mechanical Gear", price: 24.99 },
    { title: "Vehicle Collection", price: 54.99 },
  ];

  return (
    <main className="p-10">
      <h1 className="text-center text-2xl font-semibold mb-6">3D Models</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ProductCard key={i} {...item} desc="Downloadable STL files" />
        ))}
      </div>
    </main>
  );
}