'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Zap, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card.js';

const communityFeatures = [
  {
    icon: MessageCircle,
    title: 'Reddit-Style Forum',
    description:
      'Discuss strategies, share insights, and learn from experienced players in topic-based communities.',
    stats: '10K+ Daily Discussions',
  },
  {
    icon: Zap,
    title: 'Live Event Chat',
    description:
      'Real-time chat during games with fellow enthusiasts. React to plays as they happen.',
    stats: 'Active During All Games',
  },
  {
    icon: Shield,
    title: 'AI Moderation',
    description:
      'Smart moderation keeps discussions constructive and informative. Quality conversations guaranteed.',
    stats: '95% Positive Interactions',
  },
];

export function CommunitySection() {
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
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            50,000+ Active Members
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Connect, Discuss,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Conquer Together
            </span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Join a thriving community of sports prediction enthusiasts. Share
            strategies, celebrate wins, and learn from the best minds in the
            game.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Community mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-6 shadow-2xl">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-neutral-900">
                    🏀 NBA Predictions
                  </h3>
                  <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                    2.3K Online
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Forum post 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="p-4 bg-neutral-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        JM
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          @DataDrivenJay
                        </div>
                        <div className="text-xs text-success">
                          #3 This Month
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-800 mb-2">
                      Lakers momentum shift after the trade is huge. Check the
                      offensive rating improvement 📈
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span>👍 24</span>
                      <span>💬 8 replies</span>
                      <span>2m ago</span>
                    </div>
                  </motion.div>

                  {/* Forum post 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-accent-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        SC
                      </div>
                      <div>
                        <div className="font-medium text-sm">@StatsGuru</div>
                        <div className="text-xs text-accent-600">
                          AI Verified ✓
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-800 mb-2">
                      Weather impact on tonight&apos;s game could be
                      significant. Historical data shows...
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <span>👍 45</span>
                      <span>💬 12 replies</span>
                      <span>5m ago</span>
                    </div>
                  </motion.div>

                  {/* Live chat indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center py-2 text-sm text-primary-600"
                  >
                    <div className="w-2 h-2 bg-error rounded-full mr-2 animate-pulse" />
                    Live during Lakers vs Warriors (8:30 PM)
                  </motion.div>
                </div>
              </div>
            </Card>

            {/* Floating stats */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 border"
            >
              <div className="text-center">
                <div className="text-lg font-bold text-primary-600">2.3K</div>
                <div className="text-xs text-neutral-500">Online Now</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-success/10 text-success text-sm font-medium rounded-full">
                    {feature.stats}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Community stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
            <div className="text-neutral-600">Active Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-600 mb-2">1M+</div>
            <div className="text-neutral-600">Monthly Messages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">24/7</div>
            <div className="text-neutral-600">Community Support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-neutral-600">Positive Feedback</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
