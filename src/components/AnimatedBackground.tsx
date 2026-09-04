'use client';

import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion';

export default function AnimatedBackground() {
  // Bakgrunnen blir liggende fast i vinduet (fixed), men fargeklattene
  // dras opp/ned ut fra hvor langt man har scrollet på siden – det skaper
  // illusjonen av at fargene beveger seg mens man scroller.
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gray-950">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-cyan-600/30 blur-[120px]"
          animate={{ x: [0, 90, -30, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 -right-56 w-[34rem] h-[34rem] rounded-full bg-cyan-400/20 blur-[130px]"
          animate={{ x: [0, -70, 40, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-[-14rem] left-1/4 w-[32rem] h-[32rem] rounded-full bg-blue-700/20 blur-[130px]"
          animate={{ x: [0, 60, -40, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
        <motion.div
          style={{ y: y4 }}
          className="absolute top-[10%] left-1/2 w-[26rem] h-[26rem] rounded-full bg-cyan-800/25 blur-[110px]"
          animate={{ x: [0, -50, 30, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />
      </div>
    </MotionConfig>
  );
}
