'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button.js';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply opacity-30"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply opacity-30"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [180, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Join 50,000+ Smart Sports Players
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight"
            >
              Play Smart.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
                Win Big.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed"
            >
              Master skill-based sports predictions with AI-powered insights.
              Compete on leaderboards, win real prizes, and join a community of
              data-driven sports enthusiasts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="xl" className="animate-pulse-glow group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Join Sportsclub Now
              </Button>
              <Button variant="secondary" size="xl">
                <Target className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-8 text-sm text-neutral-500"
            >
              <div className="flex items-center">
                <span className="w-2 h-2 bg-success rounded-full mr-2" />
                Free trial included
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-success rounded-full mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-success rounded-full mr-2" />
                Real cash prizes
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 border border-neutral-200">
              {/* Mock dashboard interface */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-neutral-900">
                    Today&apos;s Predictions
                  </h3>
                  <span className="text-success font-semibold">
                    85% Accuracy
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      team: 'Lakers vs Warriors',
                      prediction: '+8.5',
                      confidence: 94,
                    },
                    {
                      team: 'Cowboys vs Giants',
                      prediction: 'Over 45.5',
                      confidence: 87,
                    },
                    {
                      team: 'Red Sox vs Yankees',
                      prediction: 'ML +120',
                      confidence: 76,
                    },
                  ].map((game, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-sm">{game.team}</div>
                        <div className="text-primary-600 font-bold">
                          {game.prediction}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-neutral-500">
                          Confidence
                        </div>
                        <div className="font-bold text-success">
                          {game.confidence}%
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">
                    $2,450
                  </div>
                  <div className="text-xs text-neutral-500">This Month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">87%</div>
                  <div className="text-xs text-neutral-500">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">#12</div>
                  <div className="text-xs text-neutral-500">Leaderboard</div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-full shadow-xl flex items-center justify-center"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
