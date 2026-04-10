export default function ProductCard({ title, price, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition">
      <div className="h-48 bg-gray-200 rounded-xl mb-4" />
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-blue-600 font-bold">${price}</span>
      </div>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
      <button className="mt-4 w-full bg-indigo-900 text-white py-2 rounded-lg hover:bg-indigo-800">
        Add To Cart
      </button>
    </div>
  );
}