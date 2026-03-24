export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white/5 backdrop-blur-glass border-r border-white/10 p-6">
      <h1 className="text-xl font-bold mb-8">Golf App</h1>

      <nav className="space-y-4 text-gray-300">
        <p className="hover:text-white cursor-pointer">Dashboard</p>
        <p className="hover:text-white cursor-pointer">Scores</p>
        <p className="hover:text-white cursor-pointer">Draws</p>
      </nav>
    </div>
  );
}