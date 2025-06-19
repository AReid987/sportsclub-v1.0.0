'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Brain, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card.tsx';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Information Overload',
    description:
      'Drowning in stats, opinions, and conflicting advice from countless sources.',
    color: 'text-error',
  },
  {
    icon: Brain,
    title: 'No Predictive Skills',
    description:
      'Traditional gut feelings and hunches lead to inconsistent results.',
    color: 'text-accent-600',
  },
  {
    icon: Shield,
    title: 'High-Risk Betting',
    description:
      'Traditional sports betting requires large stakes with unpredictable outcomes.',
    color: 'text-neutral-600',
  },
];

const solutions = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description:
      'Cut through the noise with data-driven predictions and personalized analysis.',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    icon: TrendingUp,
    title: 'Skill Development',
    description:
      'Learn and improve your prediction skills with our AI tutor and detailed feedback.',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    icon: Shield,
    title: 'Low-Risk Gaming',
    description:
      'Monthly subscription model with virtual coins - no unpredictable losses.',
    gradient: 'from-success to-green-600',
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Stop Guessing. Start{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Winning.
            </span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Traditional sports prediction is broken. We&apos;ve built a better
            way.
          </p>
        </motion.div>

        {/* Problems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            The Problems You Face
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center border-2 border-neutral-200 hover:border-error/30 transition-colors">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center">
                      <problem.icon className={`w-8 h-8 ${problem.color}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    {problem.title}
                  </h4>
                  <p className="text-neutral-600">{problem.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            How Sportsclub Solves This
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center border-2 border-success/30 hover:border-success/50 transition-colors card-hover">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-full flex items-center justify-center`}
                    >
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">
                    {solution.title}
                  </h4>
                  <p className="text-neutral-600">{solution.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              The Future of Sports Prediction is Here
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of smart sports enthusiasts who&apos;ve discovered
              a better way to play, learn, and win with data-driven insights.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
