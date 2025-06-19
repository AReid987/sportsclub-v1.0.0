'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Coins, Zap, Calendar, Star, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const rewards = [
  {
    icon: Coins,
    title: 'Daily Bonuses',
    description: 'Log in daily to collect bonus coins and maintain your streak',
    value: '+100 Coins',
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    icon: Zap,
    title: 'Streak Rewards',
    description: 'Build winning streaks for multiplied rewards',
    value: '2x-5x Multiplier',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Target,
    title: 'Challenges',
    description: 'Complete weekly and monthly challenges for exclusive prizes',
    value: 'Exclusive Rewards',
    color: 'from-accent-500 to-accent-600',
  },
];

const achievements = [
  {
    title: 'First Pick',
    description: 'Make your first prediction',
    icon: '🎯',
  },
  {
    title: 'Hot Streak',
    description: '5 correct predictions in a row',
    icon: '🔥',
  },
  { title: 'Data Master', description: 'Use AI insights 50 times', icon: '🧠' },
  { title: 'Community Star', description: 'Get 100 upvotes', icon: '⭐' },
];

export function GamificationSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-800 rounded-full text-sm font-medium mb-6">
            <Trophy className="w-4 h-4 mr-2" />
            Skill-Based Rewards
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Your Skill,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              Your Rewards
            </span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Every prediction, every insight, every win matters. Build your
            skills, climb the leaderboard, and earn real rewards that reflect
            your expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Rewards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-8">
              Earn Rewards Daily
            </h3>

            <div className="space-y-6">
              {rewards.map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary-500">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${reward.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <reward.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-neutral-900">
                            {reward.title}
                          </h4>
                          <span className="text-sm font-bold text-success bg-success/10 px-2 py-1 rounded-full">
                            {reward.value}
                          </span>
                        </div>
                        <p className="text-neutral-600">{reward.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Leaderboard preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-neutral-900">
                  Monthly Leaderboard
                </h3>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-neutral-500" />
                  <span className="text-sm text-neutral-500">
                    December 2024
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    rank: 1,
                    name: 'DataMaster_Mike',
                    score: 2450,
                    change: '+15',
                    avatar: 'MM',
                    color: 'from-yellow-400 to-yellow-500',
                  },
                  {
                    rank: 2,
                    name: 'PredictionPro',
                    score: 2380,
                    change: '+8',
                    avatar: 'PP',
                    color: 'from-gray-300 to-gray-400',
                  },
                  {
                    rank: 3,
                    name: 'StatsGuru99',
                    score: 2340,
                    change: '+12',
                    avatar: 'SG',
                    color: 'from-orange-400 to-orange-500',
                  },
                  {
                    rank: 4,
                    name: 'You',
                    score: 1890,
                    change: '+45',
                    avatar: 'YU',
                    color: 'from-primary-500 to-primary-600',
                    highlight: true,
                  },
                ].map((player, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-4 p-3 rounded-lg ${
                      player.highlight
                        ? 'bg-primary-50 border-2 border-primary-200'
                        : 'bg-neutral-50'
                    }`}
                  >
                    <div className="text-lg font-bold text-neutral-600 w-8">
                      #{player.rank}
                    </div>
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${player.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {player.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-neutral-900">
                        {player.name}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {player.score} pts
                      </div>
                    </div>
                    <div className="text-success font-semibold text-sm">
                      {player.change}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600 mb-1">
                    $2,500
                  </div>
                  <div className="text-sm text-neutral-600">
                    Prize Pool This Month
                  </div>
                </div>
              </div>
            </Card>

            {/* Prize notification */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 bg-success text-white p-3 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                <div>
                  <div className="font-bold text-sm">Prize Alert!</div>
                  <div className="text-xs opacity-90">Top 100 win cash</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">
            Unlock Achievements
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 text-center card-hover">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-neutral-600">
                    {achievement.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button size="lg">
            <Star className="w-5 h-5 mr-2" />
            Start Earning Rewards
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
