import GlassCard from "../ui/GlassCard";

export default function ChartCard() {
  return (
    <GlassCard>
      <p className="text-gray-400 mb-4">Performance</p>
      <div className="h-40 bg-gradient-to-r from-purple-500/30 to-cyan-400/30 rounded-xl"></div>
    </GlassCard>
  );
}