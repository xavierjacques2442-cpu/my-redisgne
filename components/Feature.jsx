export function Feature({ title, desc }) {
  return (
    <div className="text-center">
      <div className="text-3xl mb-2">⚡</div>
      <h3 className="font-semibold text-gray-950">{title}</h3>
      <p className="text-sm text-gray-900">{desc}</p>
    </div>
  );
}
