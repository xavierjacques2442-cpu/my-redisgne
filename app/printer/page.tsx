import ProductCard from "../../components/ProductCard";

export default function Models() {
  const items = [
    {
      title: "Sci-fi Robot Character",
      price: 49.99,
      desc: "Fully rigged robot character with detailed mechanical parts. Ready for animation and rendering.",
      format: "STL, OBJ",
      polygons: "150k",
    },
    {
      title: "Sci-fi Building Set",
      price: 39.99,
      desc: "Complete set of modular building components for architectural visualization.",
      format: "STL",
      polygons: "90k",
    },
    {
      title: "Fantasy Dragon Model",
      price: 49.99,
      desc: "Detailed dragon model with spread wings and textured scales. Perfect for tabletop gaming.",
      format: "STL",
      polygons: "300k",
    },
    {
      title: "Furniture pack Vol.1",
      price: 44.99,
      desc: "Collection of modern furniture models including chairs, tables, and shelves.",
      format: "OBJ, FBX",
      polygons: "120k",
    },
    {
      title: "Vehicle Collection",
      price: 54.99,
      desc: "Set of 5 detailed vehicle models including cars, trucks, and motorcycles.",
      format: "STL, OBJ",
      polygons: "186k",
    },
    {
      title: "Tabletop Terrain Set",
      price: 39.99,
      desc: "Complete terrain set for miniature wargaming including hills, rocks, and ruins.",
      format: "STL",
      polygons: "112k",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-12 px-6">
      
      <h1 className="text-center text-3xl font-bold mb-10 text-gray-950">
        3D Models
      </h1>
        <p className="text-center text-sm text-gray-950 mb-6">
         Download professional 3D models ready for printing. All models are tested and optimized for successful prints on any FDM or resin printer.
        </p>

      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </main>
  );
}
