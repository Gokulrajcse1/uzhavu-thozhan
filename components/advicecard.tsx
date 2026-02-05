interface Props {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: "green" | "yellow" | "blue";
}

export default function AdviceCard({ title, description, icon, color }: Props) {
  const variants = {
    green: "border-b-[#2DD4BF] bg-white",
    yellow: "border-b-[#FACC15] bg-white",
    blue: "border-b-[#60A5FA] bg-white",
  };

  return (
    <div className={`p-6 rounded-[2.5rem] shadow-sm border-b-8 ${variants[color]}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-gray-50 rounded-xl">{icon}</div>
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
      </div>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}