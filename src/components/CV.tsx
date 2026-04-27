import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Code2, Award, FolderGit2 } from 'lucide-react';

export default function CV() {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-bg-secondary relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Education Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-bg p-8 rounded-3xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-text">Education</h3>
            </div>
            <div className="relative pl-8 border-l-2 border-border space-y-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-bg border-4 border-primary/20"></div>
                <h4 className="text-lg font-bold text-text">University of Sydney</h4>
                <p className="text-primary font-medium mb-2">Master of Computer Science</p>
                <p className="text-secondary text-sm mb-3">Jul. 2024 ~ Nov. 2025 | Sydney, Australia</p>
                <ul className="list-disc list-inside text-text-muted space-y-1">
                  <li><strong>Research Area:</strong> Data Science and AI</li>
                  <li><strong>Relevant coursework:</strong> Machine Learning and Data Mining, Data Analysis in Social Science, Web Application Development, Professional Practice in IT</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-bg border-4 border-primary/20"></div>
                <h4 className="text-lg font-bold text-text">National PingTung University</h4>
                <p className="text-primary font-medium mb-2">Bachelor of Computer Science and Artificial Intelligence</p>
                <p className="text-secondary text-sm mb-3">Sep. 2020 ~ Jun. 2024 | PingTung, Taiwan</p>
                <ul className="list-disc list-inside text-text-muted space-y-1">
                  <li><strong>Research Area:</strong> Facial Recognition, Reversible Data Hiding</li>
                  <li><strong>Relevant coursework:</strong> iOS programming, Information Security, Design of Digital Game, Operation System, Software Engineering, Artificial Intelligence, Deep Learning</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-bg p-8 rounded-3xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-text">Work Experience</h3>
            </div>
            <div className="relative pl-8 border-l-2 border-border space-y-8">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-bg border-4 border-secondary/20"></div>
                <h4 className="text-lg font-bold text-text">Quality Control Inspector</h4>
                <p className="text-purple-600  font-medium mb-2">SENDEX</p>
                <p className="text-secondary text-sm mb-3">Dec. 2024 ~ Feb. 2025 | Sydney, Australia</p>
                <ul className="list-disc list-inside text-text-muted space-y-1">
                  <li>Inspected and verified returned products to ensure compliance with quality standards, maintaining a high level of accuracy and attention to detail.</li>
                  <li>Unpacked, repackaged, labelled items, and prepared shipments for return to headquarters within strict turnaround times.</li>
                  <li>Communicated effectively with team members to resolve discrepancies, ensuring smooth workflow and reducing processing delays.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-bg border-4 border-secondary/20"></div>
                <h4 className="text-lg font-bold text-text">Multimedia Research Assistant</h4>
                <p className="text-purple-600 font-medium mb-2">National PingTung University</p>
                <p className="text-secondary text-sm mb-3">Oct. 2023 ~ Jul. 2024 | PingTung, Taiwan</p>
                <ul className="list-disc list-inside text-text-muted space-y-1">
                  <li>Optimised Reversible Data Hiding (RDH) algorithms to enhance data embedding capacity (EC) by 13%, ensuring image data integrity.</li>
                  <li>Synthesized research from multiple journals to identify and evaluate optimal methodologies.</li>
                  <li>Established a standardized literature review process that improved the precision of experiment reproduction and validation.</li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-bg border-4 border-secondary/20"></div>
                <h4 className="text-lg font-bold text-text">Process Engineer</h4>
                <p className="text-purple-600  font-medium mb-2">Unimicron Technology Corp.</p>
                <p className="text-secondary text-sm mb-3">Jul. 2021 ~ Aug. 2021 | Hsinchu, Taiwan</p>
                <ul className="list-disc list-inside text-text-muted space-y-1">
                  <li>Performed precision grinding and polishing to prepare IC chip cross-sections for detect analysis.</li>
                  <li>Examined microstructures under microscopy to detect issues such as metal interconnect failures and interlayer anomalies.</li>
                  <li>Applied high attention to detail and technical accuracy to support production quality and reduce defect recurrence.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-bg p-8 rounded-3xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-text">Skills</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-text mb-2">Programming Languages</h4>
                <p className="text-emerald-600 mb-2">C/C++, C#, Swift, Java</p>
                <p className="text-secondary text-sm">Applied analytical thinking to debug complex code issues, improving program efficiency and accuracy in multiple academic projects.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text mb-2">Web design & Database</h4>
                <p className="text-emerald-600 mb-2">Java Script, PHP, SQL, HTML/CSS, MEAN Stack Development (MongoDB, Express.js, Angular, Node.js)</p>
                <p className="text-secondary text-sm">Collaborated in multi-member teams to design, develop, and deploy websites, coordinating tasks, and ensuring on-time delivery.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text mb-2">Data Science & Analytics</h4>
                <p className="text-emerald-600 mb-2">Python, R, Machine Learning, Data Mining, Data Analysis</p>
                <p className="text-secondary text-sm">Applied analytical and problem-solving skills to extract insights from datasets, collaborating with team members to present findings in reports.</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-text mb-2">Languages</h4>
                <p className="text-emerald-600">Mandarin (Native), English (IELTS Academic 6.5)</p>
              </div>
            </div>
          </motion.div>

          {/* Awards & Certificates Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-bg p-8 rounded-3xl border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-600">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-text">Awards & Certificates</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-bg-secondary rounded-xl border border-border">
                <p className="font-bold text-text">Google AI Professional Certificate</p>
                <p className="text-secondary text-sm">2026</p>
              </div>
              <div className="p-4 bg-bg-secondary rounded-xl border border-border">
                <p className="font-bold text-text">Google AI for App Building</p>
                <p className="text-secondary text-sm">2026</p>
              </div>
              <div className="p-4 bg-bg-secondary rounded-xl border border-border">
                <p className="font-bold text-text">Google AI for Data Analysis</p>
                <p className="text-secondary text-sm">2026</p>
              </div>
              <div className="p-4 bg-bg-secondary rounded-xl border border-border">
                <p className="font-bold text-text">Academic Excellence Award</p>
                <p className="text-secondary text-sm">2022</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
