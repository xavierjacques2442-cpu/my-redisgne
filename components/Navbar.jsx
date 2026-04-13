import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="font-bold text-lg text-gray-950">PrintPro 3D</h1>

      <div className="space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 text-gray-950">Home</Link>
        <Link href="/products" className="hover:text-blue-600 text-gray-950">Printed Projects</Link>
        <Link href="/printer" className="hover:text-blue-600 text-gray-950">3D Models</Link>
        <Link href="/blog" className="hover:text-blue-600 text-gray-950">Blog</Link>
      </div>
    </nav>
  );
}
