const creators = [
  { name: "DJ Mwanga", category: "Music" },
  { name: "Funny Otis", category: "Comedy" },
  { name: "Pixel Queen", category: "Photography" }
];

export default function Creators() {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6">Discover Creators</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {creators.map((creator, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-xl">
            <h3 className="text-xl font-bold">{creator.name}</h3>
            <p className="text-gray-400">{creator.category}</p>
            <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg">
              Support
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
