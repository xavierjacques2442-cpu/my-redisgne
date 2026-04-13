export default function Blog() {
  const posts = [
    {
      title: "Finally! Perfect Resin 3D Printer For NEW: HeyGears...",
      desc: "The HeyGears Reflex RS Turbo, an upgraded version of the HeyGears Reflex RS, features a new generation 8K LCD screen, called the 8K Amber Screen, offering a longer lifespan and the ability to print 1 million layers. The HeyGears Reflex RS...",
    },
    {
      title: "The Real Business Case for 3D Printing: From Concept to paper",
      desc: "The HeyGears Reflex RS Turbo, an upgraded version of the HeyGears Reflex RS, features a new generation 8K LCD screen, called the 8K Amber Screen, offering a longer lifespan and the ability to print 1 million layers. The HeyGears Reflex RS...",
    },
    {
      title: "Best Christmas STL Files for 3D Printing: Ideas, Tips & Top Designs",
      desc: "Looking for festive 3D print ideas for Christmas? Discover free & premium STL files to make ornaments, decorations, toys, and gifts—tips for printability, best designs, and real maker outcomes.",
    },
    {
      title: "Best Halloween STL Files for 3D Printing: Ideas, Tips & Top Designs",
      desc: "Looking for spooky, creative 3D print ideas for Halloween? Discover free & premium STL files to make masks, lanterns, props, and decor—tips for printability, best designs, and real maker outcomes.",
    },
    {
      title: "Printing the Game: How 3D Printing is Changing Sports",
      desc: "Sports fans have always looked for ways to bring the game home. Jerseys, scarves, and keychains line shelves around the world. But now, a different technology is letting people create memorabilia that feels personal and one-of-time memories.",
    },
    {
      title: "How to Earn a Side Income with Cults3D? A Complete Guide for Makers and Designers",
      desc: "In an uncertain economic climate, learn how to generate a solid side income by selling your digital files or crafted objects through Cults3D. A simple, creative, and accessible solution for designers, makers, and digital creators.",
    },
  ];

  return (
    <main className="bg-gray-100 min-h-screen py-12 px-6">
  
      <h1 className="text-center text-3xl font-bold mb-10 text-gray-950">
        The Blogs Page
      </h1>
       <p className="text-center text-sm text-gray-950 mb-6">
     Follow the Blog for more articles & current news in the 3d printing space!
        </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
    
            <div className="h-52 bg-gray-300" />

  
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {post.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {post.desc}
              </p>

              <button className="mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
