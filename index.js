import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function DancingTurtle() {
  const turtleRef = useRef(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-4xl font-bold mb-8">Dancing Turtle</h1>
      <motion.img
        ref={turtleRef}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Turtle_icon_green.svg/512px-Turtle_icon_green.svg.png"
        alt="Dancing Turtle"
        className="w-48 h-48"
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1.1, 1],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </div>
  );
}
