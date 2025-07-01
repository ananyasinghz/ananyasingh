import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTools,
  FaRocket,
  FaCodeBranch,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaCode,
  FaServer,
  FaBug,
  FaKeyboard,
  FaMicrochip,
  FaNetworkWired,
  FaTerminal,
} from "react-icons/fa";
import "./FloatingIcons.css";

// We'll duplicate and shuffle a larger icon pool
const iconSet = [
  FaLaptopCode,
  FaTools,
  FaRocket,
  FaCodeBranch,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaCode,
  FaServer,
  FaBug,
  FaKeyboard,
  FaMicrochip,
  FaNetworkWired,
  FaTerminal,
];

// Generate more icons (e.g., 25)
const totalIcons = 25;
const icons = Array.from({ length: totalIcons }, (_, i) => {
  const Icon = iconSet[i % iconSet.length];
  return { Icon, index: i };
});

export default function FloatingIcons() {
  return (
    <div className="floating-icons">
      {icons.map(({ Icon, index }) => {
        const size = 20 + (index % 4) * 6; // base size between 20–38
        const top = `${Math.random() * 95}%`;
        const left = `${Math.random() * 95}%`;
        const duration = 3 + Math.random() * 3;

        return (
          <motion.div
            key={index}
            className="icon-bubble"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
            style={{ top, left }}
          >
            <Icon size={size} />
          </motion.div>
        );
      })}
    </div>
  );
}
