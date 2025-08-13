import { useState } from "react";
import {
  Home,
  FileText,
  PieChart,
  Truck,
  Sparkles,
  MessageCircleQuestion,
  Plus,
  Unlock
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState(0);

  const menuItems = [
    { icon: <Home size={20} />, label: "Home" },
    { icon: <FileText size={20} />, label: "Docs" },
    { icon: <PieChart size={20} />, label: "Stats" },
    { icon: <Truck size={20} />, label: "Delivery" },
    { icon: <Sparkles size={20} />, label: "Magic" },
    { icon: <MessageCircleQuestion size={20} />, label: "Help" },
  ];

  return (
    <div className="fixed top-0 left-0 h-ful flex flex-col items-center justify-between bg-gray-200 border-r w-16 py-4 h-screen border border-gray-300">
      {/* Logo */}
      <div className="flex flex-col items-center gap-4">
        <div className="text-pink-500 font-bold text-2xl">🎁</div>

        {/* Plus button */}
        <button className="p-2 rounded-lg border border-pink-300 text-pink-500 hover:bg-pink-50">
          <Plus size={20} />
        </button>

        {/* Menu */}
        <div className="flex flex-col gap-4 mt-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`p-2 rounded-lg hover:bg-gray-100 ${
                active === index ? "bg-gray-100" : ""
              }`}
              onClick={() => setActive(index)}
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Unlock */}
      <button className="p-2 bg-yellow-300 rounded-lg hover:bg-yellow-400">
        <Unlock size={20} />
      </button>
    </div>
  );
}
