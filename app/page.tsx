import ProductCard from "../components/ProductCard";
import { Feature } from "../components/Feature";

export default function Home() {
  return (
    <main>
    
      <section className="h-[400px] bg-gradient-to-r from-gray-600 to-gray-400 flex items-center px-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold">Precision 3D Printing Solutions</h1>
          <p className="mt-3 text-sm">
            Transform your ideas into reality with cutting-edge 3D printing.
          </p>
          <button className="mt-4 bg-blue-600 px-4 py-2 rounded">
            Explore Products
          </button>
        </div>
      </section>

      
      <section className="p-10">
        <h2 className="text-center text-xl font-semibold mb-6">Our Printers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProductCard title="ProMax V1" price="2999" desc="Industrial printer" />
          <ProductCard title="MiniMaker" price="799" desc="Compact printer" />
          <ProductCard title="Indo Z500" price="12999" desc="High performance" />
        </div>
      </section>

      
      <section className="bg-gray-100 py-10">
        <h2 className="text-center font-semibold mb-6">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6 px-10">
          <Feature title="Wide Selection" desc="ABS, PETG, TPU" />
          <Feature title="Fast Turnaround" desc="Quick production" />
          <Feature title="Quality" desc="Tested prints" />
          <Feature title="Support" desc="Expert help" />
        </div>
      </section>
    </main>
  );
}
  