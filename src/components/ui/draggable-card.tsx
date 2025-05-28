
"use client";
import { useMotionValue, useTransform, motion } from "framer-motion";
import React, { useState } from "react";

export const DragCards = ({ cards }: { cards: CardProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.16}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-64 w-full cursor-grab rounded-xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
      
      <motion.div
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        className="absolute inset-0 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/20"
      />
    </motion.div>
  );
};
