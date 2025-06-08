import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

// Create a styled component for the full-width section
const FullWidthSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  min-height: 100vh;
  overflow: hidden;
`;

export default function CyberSecurityHero() {
  const [init, setInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions: ISourceOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 280,
          links: {
            opacity: 0.9,
            color: '#0a4275',
          },
        },
      },
    },
    particles: {
      color: {
        value: ['#0a4275', '#0f172a', '#06b6d4'],
      },
      links: {
        color: '#0a4275',
        distance: 190,
        enable: true,
        opacity: 0.8,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 1.1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 120,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 3 },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.9,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <FullWidthSection>
      {/* Particles Background */}
      <div style={{ minHeight: '100vh', height: 'auto' }} className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-slate-900 to-blue-900">
        {init && <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 w-full min-h-full" />}
        <div className="absolute inset-0 bg-blue-900/20 z-[2]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen container mx-auto px-4">
        <motion.div
          className="max-w-3xl text-center px-6 py-8 sm:px-8 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-lg my-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="text-cyan-400">СОПС</span> — Современные Решения Кибербезопасности
          </motion.h2>

          <motion.p className="text-lg md:text-xl text-white/90 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Мы обеспечиваем комплексную защиту информационных систем вашего бизнеса от современных киберугроз. Наши решения адаптируются под специфику вашей отрасли и масштаб компании.
          </motion.p>

          <motion.p className="text-lg md:text-xl text-white/90 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            Команда экспертов СОПС использует передовые технологии и методологии для обнаружения уязвимостей, предотвращения атак и оперативного реагирования на инциденты.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}>
            <Link
              className={buttonStyles({
                color: 'primary',
                variant: 'shadow',
                size: 'lg',
                class: 'w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600',
              })}
              href="#services">
              Наши услуги
            </Link>
            <Link
              className={buttonStyles({
                color: 'default',
                variant: 'bordered',
                size: 'lg',
                class: 'w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20',
              })}
              href="#contacts">
              Связаться с нами
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </FullWidthSection>
  );
}
