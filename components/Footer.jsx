export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-900 text-gray-200 py-4 px-4">
      
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

        <div className="text-center md:text-left">
          <h3 className="text-base font-semibold">Print3D</h3>
          <p className="text-xs text-gray-400 mt-1 max-w-xs">
            Leading the future of manufacturing with precision 3D printing technology.
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-sm font-semibold mb-2">Pages</h4>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-xs text-gray-400">
            <span className="hover:text-white cursor-pointer">Home</span>
            <span className="hover:text-white cursor-pointer">Products</span>
            <span className="hover:text-white cursor-pointer">About</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>


        <div className="text-center md:text-right">
          <h4 className="text-sm font-semibold mb-2">Contact</h4>
          <div className="text-xs text-gray-400 space-y-1">
            <p>Email: support@print3d.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>California, USA</p>
          </div>
        </div>

      </div>

   
      <div className="border-t border-gray-700 mt-4 pt-3 text-center text-[10px] text-gray-500">
        © {new Date().getFullYear()} Print3D. All rights reserved.
      </div>
    </footer>
  );
}
