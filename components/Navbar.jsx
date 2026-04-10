import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <h1 className="font-bold text-lg">PrintPro 3D</h1>

      <div className="space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <Link href="/products" className="hover:text-blue-600">Printed Projects</Link>
        <Link href="/printers" className="hover:text-blue-600">3D Models</Link>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
      </div>
    </nav>
  );
}
