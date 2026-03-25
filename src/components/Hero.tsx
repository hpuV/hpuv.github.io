import { motion } from 'motion/react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import resumePDF from '../assets/files/CALiuResume.pdf';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div
              className="
                inline-flex items-center gap-2 px-3 py-1 rounded-full
                bg-indigo-50/80 text-indigo-600 border border-indigo-100/80
                dark:bg-transparent dark:text-[#818CF8] dark:border-[rgba(129,140,248,0.28)]
                text-sm font-medium mb-6
              "
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text mb-6 leading-[1.1]">
              Hi, I'm <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Chin-An, Liu
              </span>
            </h1>
            
            <div className="space-y-4 mb-8 max-w-lg">
              <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
                Master of Computer Science graduate, specialising in Data Science and AI. Hands-on experience in leading full-stack AI projects, including multi-task learning models and high-performance image classification systems. Proficient in R, Python, and MLOps, with a focus on delivering high-accuracy models and enhancing system efficiency through data-driven insights. Dedicated to delivering efficient IT solutions and enhancing user experience.
              </p>
              <p className="text-lg sm:text-xl text-text-muted leading-relaxed">
                Currently <span className="font-semibold text-primary">open to work</span> and looking for my next challenge in the tech industry. If my profile aligns with your team's goals, <span className="font-semibold text-primary">let’s talk!</span>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-bg rounded-xl font-medium hover:bg-primary-hover transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-bg"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={resumePDF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bg text-text border border-border rounded-xl font-medium hover:bg-bg-secondary transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-border focus:ring-offset-bg"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl bg-bg-secondary shadow-2xl overflow-hidden border border-border">
              <div className="flex items-center px-4 py-3 bg-bg-tertiary border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 text-text-muted text-xs font-mono">
                  <Terminal className="w-3 h-3" />
                  developer.sh
                </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-text-muted mb-2">$ whoami</div>
                <div className="text-green-400 mb-4">Data Scientist & AI Engineer</div>
                
                <div className="text-text-muted mb-2">$ cat skills.json</div>
                <div className="text-indigo-300 mb-4">
                  {`{
                    "languages": ["Python", "R", "C/C++", "Java", "Swift"],
                    "data_ai": ["Machine Learning", "Data Mining", "Data Analysis"],
                    "web_db": ["MEAN Stack", "SQL", "PHP", "HTML/CSS"],
                    "tools": ["Git", "Docker"]
                  }`}
                </div>

                <div className="text-text-muted mb-2">$ echo $STATUS</div>
                <div className="text-primary flex items-center gap-2">
                  Ready to collaborate <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
