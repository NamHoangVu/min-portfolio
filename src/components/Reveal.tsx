'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Direction = 'up' | 'left' | 'right';

type RevealProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
};

// Flytter/fader elementet strengt basert på hvor langt det har scrollet inn i
// synsfeltet – ingen egen animasjonsvarighet. Scroller du 10px ned beveger
// elementet seg en fast andel av det, og scroller du 10px opp går det
// nøyaktig like langt tilbake, siden posisjonen alltid er en direkte
// funksjon av scroll-posisjonen (ikke en tidsstyrt overgang som trigges én gang).
export default function Reveal({ children, className, direction = 'up', distance = 40 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.95', 'start 0.55'] });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const forward = useTransform(scrollYProgress, [0, 1], [distance, 0]);
  const backward = useTransform(scrollYProgress, [0, 1], [-distance, 0]);

  const style =
    direction === 'left'
      ? { opacity, x: forward }
      : direction === 'right'
        ? { opacity, x: backward }
        : { opacity, y: forward };

  return (
    <motion.div ref={ref} style={style} className={className}>
      {children}
    </motion.div>
  );
}
