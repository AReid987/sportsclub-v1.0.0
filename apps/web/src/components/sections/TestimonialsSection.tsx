'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card.tsx';

const testimonials = [
  {
    name: 'Mike Rodriguez',
    role: 'Data Analyst & Sports Fan',
    avatar: 'MR',
    rating: 5,
    quote:
      "Sportsclub changed how I approach sports predictions. The AI insights are incredibly accurate, and I've improved my win rate by 40% in just 3 months.",
    metric: '40% Win Rate Increase',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    name: 'Sarah Chen',
    role: 'Fantasy Sports Enthusiast',
    avatar: 'SC',
    rating: 5,
    quote:
      'The community aspect is amazing. Learning from other experienced players has been invaluable. Plus, the monthly prizes make it even more exciting!',
    metric: '$1,200 Won Last Quarter',
    gradient: 'from-accent-500 to-accent-600',
  },
  {
    name: 'James Williams',
    role: 'Casual Sports Bettor',
    avatar: 'JW',
    rating: 5,
    quote:
      'Finally, a platform that teaches you HOW to think about sports betting instead of just giving picks. The AI tutor feature is like having a personal coach.',
    metric: '85% Accuracy Rate',
    gradient: 'from-success to-green-600',
  },
];

const stats = [
  { label: 'Average Win Rate', value: '73%', icon: TrendingUp },
  { label: 'Monthly Prize Winners', value: '2,500+', icon: Star },
  { label: 'Active Community Members', value: '50K+', icon: Users },
  { label: 'Customer Satisfaction', value: '4.9/5', icon: Star },
];

export function TestimonialsSection() {
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
          <div className="inline-flex items-center px-4 py-2 bg-success/10 text-success rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            4.9/5 Average Rating
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
              50,000+ Players
            </span>
          </h2>

          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            See how Sportsclub has transformed the way people approach sports
            predictions and helped them achieve consistent results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full card-hover border-2 border-neutral-100 hover:border-primary-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-neutral-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary-200" />
                    <p className="text-neutral-700 leading-relaxed pl-6">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="inline-flex items-center px-3 py-2 bg-success/10 text-success text-sm font-medium rounded-full">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {testimonial.metric}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-12"
        >
          <h3 className="text-2xl font-bold text-neutral-900 text-center mb-12">
            Proven Results Across Our Community
          </h3>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leaderboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-neutral-900 text-center mb-6">
              This Month&apos;s Top Performers
            </h3>
            <div className="space-y-3">
              {[
                { rank: 1, name: 'PredictionMaster', score: '2,450 pts' },
                { rank: 2, name: 'DataDrivenPro', score: '2,380 pts' },
                { rank: 3, name: 'SportsSage', score: '2,340 pts' },
                { rank: 4, name: 'AnalyticsAce', score: '2,290 pts' },
                { rank: 5, name: 'StatsWizard', score: '2,245 pts' },
              ].map((player, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {player.rank}
                    </div>
                    <span className="font-medium text-neutral-900">
                      {player.name}
                    </span>
                  </div>
                  <span className="text-primary-600 font-semibold">
                    {player.score}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-6 pt-4 border-t">
              <p className="text-sm text-neutral-600">
                Anonymous leaderboard ��� Privacy protected
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
