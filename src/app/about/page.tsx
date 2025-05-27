"use client";

import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall,
} from "@/utils/animations";
import Education from "../components/Education";

export default function About() {
  return (
    <div className="container max-w-7xl mx-auto py-12">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        {...fadeInDown}>
        About Me
      </motion.h1>

      {/* Bio Section */}
      <motion.section className="mb-16" {...fadeInUp}>
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Frontend Web Developer with expertise in
          building modern web applications. With a strong foundation in frontend
          technologies, I create seamless user experiences and robust client or
          server-side solutions.
        </p>
        {/* <p className="text-lg text-secondary max-w-3xl mx-auto text-center">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p> */}
      </motion.section>

      {/* Skills Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.2 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Skills
        </motion.h2>
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate">
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}>
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              {/* <li>Vue</li> */}
              <li>TypeScript</li>
              <li>React Query</li>
              <li>Redux (Beginner)</li>
              <li>Shadcn UI</li>
              <li>Chakra UI</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}>
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Bun</li>
              <li>Hono</li>
              <li>Express</li>
              <li>Laravel (Beginner)</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHover}>
            <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / GitHub</li>
              <li>Postman</li>
              <li>Swagger</li>
              <li>Figma</li>
              <li>Scalar</li>
              <li>Jira</li>
              <li>Trello</li>
              {/* <li>WhatsApp API</li>
              <li>Xendit</li>
              <li>Midtrans</li>
              <li>Tripay</li>
              <li>Raja Ongkir</li> */}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section className="mb-16" {...fadeIn} transition={{ delay: 0.4 }}>
        <motion.h2 className="section-title" {...fadeInUp}>
          Experience
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate">
          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">
              Web Development Trainee
            </h3>
            <p className="text-primary mb-2">
              PT Wahidev Teknologi Indonesia • May 2025 - Present
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Contributing to full stack web development tasks in a structured
                training program
              </li>
              <li>
                Working with frontend technologies such as HTML, CSS, Tailwind
                CSS, JavaScript, React.js, Redux, and Supabase
              </li>
              <li>
                Gaining experience with backend development using PHP, MySQL,
                and Laravel
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
            variants={fadeInUp}
            {...cardHoverSmall}>
            <h3 className="text-xl font-semibold mb-2">
              Full Stack Web Developer
            </h3>
            <p className="text-primary mb-2">
              Bearmentor • Aug 2024 – Apr 2025
            </p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>
                Built full-stack web apps using React, Tailwind CSS, and Hono
                (Bun)
              </li>
              <li>
                Implemented JWT-based authentication and role-based access
                control
              </li>
              <li>Created and documented RESTful APIs using Scalar</li>
              <li>
                Used Docker for containerizing and deploying backend services
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <Education />
    </div>
  );
}
