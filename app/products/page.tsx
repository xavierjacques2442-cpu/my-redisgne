import ProductCard from "../../components/ProductCard";

export default function Products() {
  const items = [
    { title: "Dragon Figure", price: 24.99 },
    { title: "Geometric Planter", price: 18.99 },
    { title: "Phone Stand", price: 12.99 },
    { title: "Mini Chess Set", price: 34.99 },
    { title: "Keycap Set", price: 29.99 },
    { title: "Wall Hooks", price: 16.99 },
  ];

  return (
    <main className="p-10">
      <h1 className="text-center text-2xl font-semibold mb-6">Printed Products</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ProductCard key={i} {...item} desc="High quality 3D print" />
        ))}
      </div>
    </main>
  );
}
