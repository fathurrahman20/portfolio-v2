"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  cardHoverSmall,
  fadeIn,
  fadeInUp,
  staggerContainer,
} from "@/utils/animations";

export default function Education() {
  return (
    <motion.section {...fadeIn} transition={{ delay: 0.6 }}>
      <motion.h2 className="section-title" {...fadeInUp}>
        Education
      </motion.h2>
      <motion.div
        className="max-w-3xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        animate="animate">
        <motion.div
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}>
          <h3 className="text-xl font-semibold mb-2">
            Bachelor's Degree in Software Engineering
          </h3>
          <p className="text-primary mb-2">
            Bina Sarana Informatika University • 2024
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        className="max-w-3xl mx-auto my-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate">
        <motion.div
          className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
          variants={fadeInUp}
          {...cardHoverSmall}>
          <h3 className="text-xl font-semibold mb-2">
            Vocational High School in Software Engineering
          </h3>
          <p className="text-primary mb-2">SMK Plus Pagelaran • 2019</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
