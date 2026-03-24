export default function GlassCard({ children }) {
  return (
    <div className="bg-white/5 backdrop-blur-glass border border-white/10 rounded-2xl p-5 shadow-lg hover:scale-[1.02] transition">
      {children}
    </div>
  );
}