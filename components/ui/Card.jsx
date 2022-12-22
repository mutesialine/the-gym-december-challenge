export default function Card({ title, subtitle, styles }) {
  return (
    <div className={`px-5 py-6 space-y-6 ${styles}`}>
      <h1 className="text-small font-bold">{title}</h1>
      <p className="text-base">{subtitle}</p>
    </div>
  );
}
