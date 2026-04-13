import ProductCard from "../../components/ProductCard";

export default function Products() {
  const items = [
    {
      title: "Dragon Figure",
      price: 24.99,
      desc: "Highly detailed dragon sculpture with intricate scales and wings. Perfect for display or collection.",
    },
    {
      title: "Geometric Planter",
      price: 18.99,
      desc: "Modern minimalist planter with angular design. Includes drainage hole for small succulents.",
    },
    {
      title: "Phone Stand",
      price: 12.99,
      desc: "Ergonomic phone stand with adjustable viewing angle. Non-slip base keeps your device secure.",
    },
    {
      title: "Mini Chess Set",
      price: 34.99,
      desc: "Complete travel chess set with all pieces. Compact design fits in any bag.",
    },
    {
      title: "Keycap Set",
      price: 29.99,
      desc: "Custom mechanical keyboard keycaps with unique designs. Compatible with Cherry MX switches.",
    },
    {
      title: "Wall Hook Set",
      price: 16.99,
      desc: "Set of 4 decorative wall hooks. Strong enough for coats, bags, and accessories.",
    },
  ];

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-center text-2xl font-semibold mb-6 text-gray-950">
        Printed Products
      </h1>
        <p className="text-center text-sm text-gray-950 mb-6">
         Browse our collection of high-quality 3D printed items. Each product is carefully printed and inspected to ensure the best quality for our customers.
        </p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </main>
  );
}
