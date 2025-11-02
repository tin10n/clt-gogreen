import { motion } from "framer-motion";
import Mascot2 from "../images/mascot2.png";
import Task from "../components/Task";
import "../styles/game.css";

export default function Challenges() {
  return (
    <section
      className="game--page">
      {/* Animated Mascot Section */}
      <motion.div
        className="mascot--container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={Mascot2}
          alt="Green Bean Mascot"
          className="mascot2 drop-shadow-2xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Task Section */}
      <div className="game__task--container">
        <Task />
      </div>
    </section>
  );
}
