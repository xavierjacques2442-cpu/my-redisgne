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

      
      <section className="p-10 bg-gray-100">
        <h2 className="text-center text-xl font-semibold mb-6 text-gray-950">Our Printers</h2>
         <p className="text-center text-sm text-gray-950 mb-6">
         Explore our range of 3D printers designed to meet various needs, from hobbyist projects to industrial manufacturing.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <ProductCard title="ProMax V1" price="2999" desc="Professional-grade FDM printer perfect for industrial prototyping and small-scale production runs." />
          <ProductCard title="MiniMaker" price="799" desc="Compact and reliable 3D printer ideal for education, hobbyists, and small workshops." />
          <ProductCard title="Indo Z500" price="12999" desc="High-performance industrial printer for demanding applications and large-scale production." />
        </div>
      </section>

      
      <section className="bg-gray-200 py-10">
        <h2 className="text-center font-semibold mb-6 text-gray-950">Why Choose Us</h2>
          <p className="text-center text-sm text-gray-950 mb-6">
         We combine state-of-the-art technology with years of expertise to deliver exceptional 3D printing solutions for businesses and individuals.
        </p>
        <div className="grid md:grid-cols-4 gap-6 px-10">
          <Feature title="Wide Material Selection" desc="Support for PLA, ABS, PETG, TPU, and advanced engineering materials." />
          <Feature title="Fast Turnaround" desc="Quick production times without compromising on quality or precision." />
          <Feature title="Quality Guaranteed" desc="Every print is thoroughly inspected to meet our high standards." />
          <Feature title="Expert Support" desc="Our team is here to help you from design to final product." />
        </div>
      </section>
    </main>
  );
}
  