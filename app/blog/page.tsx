export default function Blog() {
  return (
    <main className="p-10">
      <h1 className="text-center text-2xl font-semibold mb-6">PrintPro 3D Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4">
            <div className="h-40 bg-gray-200 rounded mb-3" />
            <h3 className="font-semibold">Blog Post {i}</h3>
            <button className="mt-3 bg-gray-800 text-white px-4 py-2 rounded">
              Read More
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}