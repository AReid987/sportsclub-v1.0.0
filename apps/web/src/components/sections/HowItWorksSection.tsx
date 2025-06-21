'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Target, Trophy, Gift } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Sign Up & Get Coins',
    description:
      'Create your account and receive monthly virtual coins to start playing. No upfront costs, just pure skill-based fun.',
    color: 'from-primary-500 to-primary-600',
  },
  {
    step: '02',
    icon: Target,
    title: 'Make Smart Picks',
    description:
      'Use our AI insights to make informed predictions on your favorite sports. Learn from real-time data and expert analysis.',
    color: 'from-accent-500 to-accent-600',
  },
  {
    step: '03',
    icon: Trophy,
    title: 'Compete & Climb',
    description:
      'Watch your predictions play out in real-time and climb the leaderboard. Track your progress and improve your skills.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    step: '04',
    icon: Gift,
    title: 'Win Real Prizes',
    description:
      'Top performers earn real cash prizes, exclusive rewards, and recognition. Your skills directly translate to rewards.',
    color: 'from-success to-green-600',
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Works
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Get started in minutes and begin your journey to smarter sports
            predictions
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-success/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 text-neutral-400 font-bold text-lg rounded-full mb-6 group-hover:bg-neutral-200 transition-colors relative z-10">
                  {step.step}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg relative z-10`}
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Animated connection arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20"
                  >
                    <div className="w-12 h-12 bg-white rounded-full border-4 border-neutral-100 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-primary-400 border-y-2 border-y-transparent" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key features highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              Monthly
            </div>
            <div className="text-neutral-600">Virtual Coins</div>
            <div className="text-sm text-neutral-500 mt-1">
              Fresh start every month
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-600 mb-2">
              Real-time
            </div>
            <div className="text-neutral-600">Leaderboards</div>
            <div className="text-sm text-neutral-500 mt-1">
              Live competition tracking
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">Cash</div>
            <div className="text-neutral-600">Prizes</div>
            <div className="text-sm text-neutral-500 mt-1">
              Real rewards for top players
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
