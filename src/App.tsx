/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Zap, 
  ChevronLeft, 
  Smartphone, 
  AlertTriangle, 
  Hammer, 
  CheckCircle2, 
  Heart, 
  Edit3, 
  LayoutDashboard, 
  AlarmClock, 
  Sparkles, 
  Settings 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Pattern {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
}

const patterns: Pattern[] = [
  {
    id: 'jackhammer',
    name: 'Jackhammer',
    description: 'SUSTAINED HIGH-FREQ',
    icon: <Hammer className="w-8 h-8" />,
  },
  {
    id: 'rapid-pulse',
    name: 'Rapid Pulse',
    description: 'INTERMITTENT BURSTS',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 'heartbeat',
    name: 'Heartbeat',
    description: 'RHYTHMIC DOUBLE TAP',
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'RECORD YOUR OWN',
    icon: <Edit3 className="w-8 h-8" />,
  },
];

export default function App() {
  const [selectedPattern, setSelectedPattern] = useState('jackhammer');
  const [extraIntense, setExtraIntense] = useState(true);

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="text-primary p-2 rounded-full bg-white/5">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <h1 className="text-xl font-headline font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container tracking-tight">
            The Electric Guardian
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
          <img 
            alt="Profile" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlDydF6aWyUMs52klG88dgr-Wutlu6z_jOtchgH5DyGoRzTj3qNxBv3q8oKZ94NeJgyMNt_kLigUm0GqeJ0htSgQxIOxGyav_xMcw1pb3IW8P3ysextAAarL01HLtuRPo3q9awjouwGeAImz-CQpvpnkKKMa74jMMJ6SOHkGbJYKqoKJJU5IMy7Ao9tzzRc6KKZK5p0c8avZ8OTRVupsT3ovsQKjfmTtSSrEBHkZlhw86uylIQ4Rz51qTX0I6eUzq_1yhZEmBRCOM"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Back Action */}
        <button className="flex items-center gap-2 text-primary mb-8 font-bold tracking-tight hover:opacity-80 transition-opacity">
          <ChevronLeft className="w-5 h-5" />
          Vibration Pattern
        </button>

        {/* Hero Section */}
        <section className="mb-8 relative overflow-hidden rounded-3xl p-8 bg-surface">
          <div className="relative z-10">
            <p className="text-secondary font-bold text-xs tracking-[0.2em] uppercase mb-2">Tactile Feedback</p>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface leading-tight mb-4">
              Choose your <span className="text-primary italic">Wake-Up</span> Pulse
            </h2>
            <p className="text-on-surface-variant max-w-[80%] leading-relaxed">
              Select the intensity that breaks through your deepest REM cycle.
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <Smartphone className="w-48 h-48" />
          </div>
        </section>

        {/* Extra Intense Mode Toggle */}
        <div className="mb-8 p-6 rounded-3xl bg-surface-high flex items-center justify-between border-l-4 border-secondary shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
              <AlertTriangle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-secondary">Extra Intense Mode</h3>
              <p className="text-xs text-on-surface-variant">Maximum haptic power for heavy sleepers</p>
            </div>
          </div>
          <button 
            onClick={() => setExtraIntense(!extraIntense)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${extraIntense ? 'bg-secondary' : 'bg-surface-highest'}`}
          >
            <motion.div 
              animate={{ x: extraIntense ? 24 : 4 }}
              className="absolute top-1 left-0 w-6 h-6 bg-white rounded-full shadow-md"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>

        {/* Pattern Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {patterns.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => setSelectedPattern(pattern.id)}
              className={`relative p-6 rounded-3xl text-left transition-all duration-200 active:scale-95 overflow-hidden group ${
                selectedPattern === pattern.id 
                ? 'bg-surface-highest border-2 border-primary' 
                : 'bg-surface border-2 border-transparent'
              } ${pattern.id === 'custom' ? 'border-dashed border-on-surface-variant/30' : ''}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`${selectedPattern === pattern.id ? 'text-primary' : 'text-on-surface-variant'}`}>
                  {pattern.icon}
                </div>
                {selectedPattern === pattern.id && (
                  <CheckCircle2 className="w-6 h-6 text-primary fill-current" />
                )}
              </div>
              <div>
                <h4 className="font-headline font-extrabold text-xl text-on-surface">{pattern.name}</h4>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold mt-1">
                  {pattern.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Visualizer */}
        <div className="p-8 rounded-3xl bg-surface-high/50 backdrop-blur-xl border border-white/5">
          <h5 className="text-[10px] font-bold text-primary tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Pattern Preview
          </h5>
          <div className="flex items-end gap-2 h-24 px-4">
            {[0.5, 0.8, 0.3, 1, 0.5, 0.7, 0.6, 0.9, 0.2, 0.7, 0.8, 0.5].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: "20%" }}
                animate={{ 
                  height: `${height * 100}%`,
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  delay: i * 0.1,
                  repeatType: "reverse"
                }}
                className={`flex-1 rounded-t-full ${i % 2 === 0 ? 'bg-primary-container' : 'bg-primary'}`}
              />
            ))}
          </div>
          <p className="text-center text-[10px] text-on-surface-variant mt-6 uppercase tracking-widest font-bold opacity-50">
            Visualizing: {patterns.find(p => p.id === selectedPattern)?.name} (Active)
          </p>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full rounded-t-[3rem] z-50 bg-background/80 backdrop-blur-lg shadow-[0_-20px_40px_rgba(0,0,0,0.4)] flex justify-around items-center px-4 pb-8 pt-4">
        <NavItem icon={<LayoutDashboard />} label="Status" />
        <NavItem icon={<AlarmClock />} label="Alarms" />
        <NavItem icon={<Sparkles />} label="Feed" />
        <NavItem icon={<Settings />} label="Settings" active />
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex flex-col items-center justify-center p-3 transition-all active:scale-90 duration-300 ${
      active 
      ? 'bg-gradient-to-br from-primary to-primary-container text-background rounded-full scale-110 -translate-y-4 shadow-[0_0_20px_rgba(173,198,255,0.4)]' 
      : 'text-on-surface-variant hover:text-primary'
    }`}>
      {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
      <span className="text-[10px] uppercase font-bold tracking-widest mt-1">{label}</span>
    </button>
  );
}
