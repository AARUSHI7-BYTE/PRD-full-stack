export default function Card({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  );
}