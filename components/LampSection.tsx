"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function LampSection() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-50 flex flex-col items-center justify-center w-full h-full"
      >
        <div className="h-full w-full flex flex-col gap-4 justify-center m-auto text-start relative z-50 max-w-3xl px-4">
          <h1 className="mt-4 text-3xl sm:text-4xl text-white max-w-md font-bold">
            Hi, my name is
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Sanda{" "}
            </span>
          </h1>

          <p className="font-medium text-white my-2 max-w-[600px] text-sm sm:text-base">
            I am a Full Stack Developer <br />I like learning and trying new
            things <br />
            Check out my projects and skills!
          </p>

          <div className="my-4">
            <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2">
              My Tech Stack
            </h2>
            <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
              <li>Frontend: Next.js + React, Vue.js ,Tailwind CSS</li>
              <li>Backend: Express/Fastify, Prisma ,Symfony</li>
              <li>Database: PostgreSQL, Neon</li>
              <li>DevOps: Git, Github, Docker</li>
              <li>Mobile: React Native</li>
            </ul>
          </div>

          <div className="flex max-w-full flex-wrap gap-2">
            <Link href="https://www.linkedin.com/in/sandarisoa-rakotovelo-698b90255/">
              <Button
                variant="outline"
                size="sm"
                className="border-white text-black hover:bg-cyan-500 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:rsandarisoa@gmail.com">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-900 dark:text-white border-gray-300 dark:border-white hover:bg-red-500 hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Mail className="mr-2 h-4 w-4" />
                Mail
              </Button>
            </Link>
            <Link href="https://github.com/sandazzz">
              <Button
                variant="outline"
                size="sm"
                className="text-gray-900 dark:text-white border-gray-300 dark:border-white hover:bg-red-500 hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </LampContainer>
  );
}
