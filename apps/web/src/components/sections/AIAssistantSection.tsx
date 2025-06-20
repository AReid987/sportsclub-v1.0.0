'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, MessageSquare, BarChart3, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/Card.tsx';

const features = [
  {
    icon: MessageSquare,
    title: 'Smart Q&A',
    description:
      'Ask questions about teams, players, and matchups. Get instant, data-driven answers.',
  },
  {
    icon: BarChart3,
    title: 'Visual Analytics',
    description:
      'Generative UI creates custom charts and visualizations for better insights.',
  },
  {
    icon: BookOpen,
    title: 'Personal Tutor',
    description:
      'Learn sports analytics concepts with personalized explanations and examples.',
  },
];

export function AIAssistantSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Intelligence
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
              Master Your Game with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                AI Insights
              </span>
            </h2>

            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Our advanced AI assistant doesn&apos;t just give you
              predictions—it teaches you how to think like a pro analyst. Learn,
              adapt, and improve with every interaction.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - AI Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-6 shadow-2xl border border-neutral-200">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-neutral-900">
                    AI Assistant
                  </span>
                  <div className="w-2 h-2 bg-success rounded-full ml-auto" />
                </div>

                <div className="space-y-4">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="bg-primary-500 text-white p-3 rounded-2xl rounded-tr-sm max-w-xs">
                      <p className="text-sm">
                        What&apos;s the best strategy for Lakers vs Warriors
                        tonight?
                      </p>
                    </div>
                  </div>

                  {/* AI response */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-start"
                  >
                    <div className="bg-neutral-100 p-4 rounded-2xl rounded-tl-sm max-w-sm">
                      <p className="text-sm text-neutral-900 mb-3">
                        Based on recent performance data:
                      </p>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-xs">
                          <span>Lakers ATS Last 5</span>
                          <span className="font-semibold text-success">
                            4-1
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>O/U Trend</span>
                          <span className="font-semibold text-accent-600">
                            Under 65%
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Key Injury Impact</span>
                          <span className="font-semibold text-error">-3.5</span>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-600">
                        Recommendation: Lakers +6.5, Under 235.5
                      </p>
                    </div>
                  </motion.div>

                  {/* Follow-up suggestion */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <button className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full hover:bg-primary-200 transition-colors">
                      Show detailed analysis
                    </button>
                    <button className="text-xs bg-accent-100 text-accent-700 px-3 py-1 rounded-full hover:bg-accent-200 transition-colors">
                      Similar matchups
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Charts preview */}
              <div className="border-t pt-4">
                <div className="text-sm font-medium text-neutral-700 mb-3">
                  Performance Visualization
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.6, delay: 1.6 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-16 bg-gradient-to-t from-primary-200 to-primary-400 rounded origin-bottom"
                      style={{ height: `${40 + i * 10}px` }}
                    />
                  ))}
                </div>
              </div>
            </Card>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 w-12 h-12 bg-accent-500 rounded-full shadow-lg flex items-center justify-center"
            >
              <BarChart3 className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
