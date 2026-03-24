export default function Navbar() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <input
        type="text"
        placeholder="Search..."
        className="bg-white/10 px-4 py-2 rounded-xl outline-none"
      />
    </div>
  );
}