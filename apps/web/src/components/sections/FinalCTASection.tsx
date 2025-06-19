'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button.tsx';

const benefits = [
  'Low monthly subscription - no high-stakes gambling',
  'AI-powered insights and personal tutor',
  'Vibrant community of 50,000+ players',
  'Real cash prizes for top performers',
  'Cancel anytime with no commitments',
];

const trustSignals = [
  { icon: Shield, text: 'Secure & Fair Gaming' },
  { icon: CheckCircle, text: 'Verified Payouts' },
  { icon: Rocket, text: 'Start Playing Today' },
];

export function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-300 rounded-full mix-blend-overlay" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Rocket className="w-4 h-4 mr-2" />
              Join 50,000+ Smart Sports Players
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform Your{' '}
              <span className="text-yellow-300">Sports Predictions?</span>
            </h2>

            <p className="text-xl lg:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stop gambling with gut feelings. Start winning with data-driven
              insights, AI guidance, and skill-based predictions.
            </p>
          </motion.div>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-left"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="xl"
                className="bg-white text-primary-600 hover:bg-white/90 hover:text-primary-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 group"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="xl"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Watch Demo Video
              </Button>
            </div>

            <p className="text-white/70 text-sm mt-4">
              No credit card required • Start with 500 free coins • Cancel
              anytime
            </p>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <signal.icon className="w-5 h-5 text-yellow-300" />
                </div>
                <span className="text-white/90 font-medium">{signal.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pricing highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-md mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">
                $19.99
              </div>
              <div className="text-white/80 mb-4">per month</div>
              <div className="text-sm text-white/70">
                Less than $0.67 per day • Unlimited predictions • Full AI access
              </div>
            </div>
          </div>
        </motion.div>

        {/* Urgency element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/90 rounded-full text-sm font-medium backdrop-blur-sm">
            <div className="w-2 h-2 bg-yellow-300 rounded-full mr-2 animate-pulse" />
            Limited Time: Double coins for first month
          </div>
        </motion.div>
      </div>
    </section>
  );
}
