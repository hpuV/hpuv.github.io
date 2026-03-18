import { motion } from 'motion/react';
import { Mail, Linkedin } from 'lucide-react';
import CALiuPortrait from '../assets/images/CALiuPortrait.jpg';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-6">
              Let's build something amazing together.
            </h2>
            <p className="text-lg text-text-muted mb-12 leading-relaxed">
              Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-1">Email</h3>
                  <a href="mailto:andy1105yo@gmail.com" className="text-text-muted hover:text-primary transition-colors text-lg">
                    andy1105yo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text mb-1">LinkedIn</h3>
                  <a href="https://www.linkedin.com/in/ca-liu" target="_blank" rel="noreferrer" className="text-text-muted hover:text-blue-600 transition-colors text-lg">
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Professional Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-bg-secondary shadow-2xl relative max-w-md mx-auto lg:ml-auto lg:mr-0">
              <img 
                src={CALiuPortrait}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
