'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ProblemStatementProps {
  className?: string;
}

const ProblemStatement: React.FC<ProblemStatementProps> = ({ className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const problems = [
    'One-size-fits-all classrooms',
    'Generic care packages',
    'Impersonal feedback systems',
    'Rigid learning paths',
    'Limited emotional support',
    'Language barriers'
  ];

  const visualElements = [
    { icon: '🏫', text: 'Traditional Classroom', delay: 0.2 },
    { icon: '📦', text: 'Generic Solutions', delay: 0.4 },
    { icon: '❌', text: 'No Personal Touch', delay: 0.6 },
    { icon: '🌍', text: 'Language Barriers', delay: 0.8 }
  ];

  return (
    <section
      ref={ref}
      className={`py-32 bg-gradient-to-br from-surface to-cream ${className}`}
      id="problem"
    >
      <div className="container-horizon">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6">
            Why Traditional Learning{' '}
            <span className="text-soft-orange">Fails You</span>
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Remember how your parents taught you to walk? Personalized. Patient. Understanding your pace.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - The Problem */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-charcoal">
                But somewhere along the way, education became:
              </h3>
              
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="w-3 h-3 bg-soft-orange rounded-full flex-shrink-0" />
                    <span className="text-lg text-warm-gray">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-soft"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💔</span>
                <h4 className="font-semibold text-charcoal">The Result?</h4>
              </div>
              <p className="text-warm-gray">
                Students feel lost, unsupported, and disconnected from their learning journey. 
                The personal touch that made education meaningful has disappeared.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Storytelling */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Visual Problem Representation */}
            <div className="grid grid-cols-2 gap-6">
              {visualElements.map((element, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-lg border border-soft hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: element.delay }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <span className="text-4xl mb-3 block">{element.icon}</span>
                  <p className="text-sm font-medium text-charcoal">{element.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Connecting Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <motion.path
                  d="M 50 150 Q 200 50 350 150"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
                <motion.path
                  d="M 50 200 Q 200 250 350 200"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                />
              </svg>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-soft-orange/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-charcoal/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <p className="text-xl text-warm-gray mb-6">
            It's time to bring back the personal touch in education
          </p>
          <button className="btn-primary">
            See How We're Different
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;
