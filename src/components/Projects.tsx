import { motion } from 'motion/react';
import { ExternalLink, Github, FileText, Video, Presentation } from 'lucide-react';
import { ReactNode } from 'react';
import pollinatorProjectImg from '../assets/images/AutoDetectFlowerImagesWebsite.png';
import bachelorCapstoneProjectImg from '../assets/images/BachelorCapstoneProject.png';
import eComerceWebProjectImg from '../assets/images/eComerceWebsite.png';
import resExpProjectImg from '../assets/images/ResidentialExperience.png';
import colonImageReportImg from '../assets/images/ColonImageClassify.png';
import companyAcqReportImg from '../assets/images/CompanyAcquisition.png';
import pollinatorProjectPresentationPdf from '../assets/files/AutoDetectFlowerImagesPresentation.pdf';
import bachelorCapstoneReportPdf from '../assets/files/BachelorCapstoneReport.pdf';
import resExpProjectPdf from '../assets/files/ResidentialExperiencePresentation.pdf';
import colonImageReportPdf from '../assets/files/ColonImageClassifyReport.pdf';
import companyAcqReportPdf from '../assets/files/CompanyAcquisitionReport.pdf';

interface Project {
  title: string;
  description: ReactNode;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  report?: string;
  presentation?: string;
  video?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Automated Detection of Pollinator–Flower Interactions from Citizen Science Images',
      description: (
        <>
          Master’s Capstone Project: Led a 7-member team, driving project direction and aligning with client requirements. Built a <span className="font-semibold text-[#38BDF8]">Full-Stack Real-time Analytics Website</span> and Docker to process and visualise pollinator–flower interactions. Developed <span className="font-semibold text-[#38BDF8]">YOLO-based object detection</span> and a multi-head <span className="font-semibold text-[#38BDF8]">Vision Transformer classifier</span> achieving <span className="font-semibold text-[#38BDF8]">over 90% accuracy</span>.
        </>
      ),
      image: pollinatorProjectImg,
      tags: ['Python', 'YOLO', 'Vision Transformer', 'Docker', 'Full-Stack'],
      presentation: pollinatorProjectPresentationPdf,
      video: 'https://youtu.be/x1Q3w7FKB1w',
    },
    {
      title: 'Design and Implementation of an Information and Communication Security Mechanism Integrating Deep Learning and Image Encryption Techniques',
      description: (
        <>
          Bachelor’s Capstone Project: Implemented and trained <span className="font-semibold text-[#38BDF8]">Face Recognition</span> and <span className="font-semibold text-[#38BDF8]">Visual Speech Recognition</span> models to simulate bank system verification, improving accuracy <span className="font-semibold text-[#38BDF8]">from 79% to 92%</span>.
        </>
      ),
      image: bachelorCapstoneProjectImg,
      tags: ['Face Recoginition', 'Visual Speech Recoginition', 'Machine Learning', 'Research', 'Python'],
      report: bachelorCapstoneReportPdf,
      video: 'https://youtu.be/eGEFksBydkU',
    },
    {
      title: 'Understanding and Modelling the Determinants of Residential Experience',
      description: (
        <>
          Computational Statistical Methods: Led a 5-member team through a <span className="font-semibold text-[#38BDF8]">Full Data Analytics Workflow</span>, including Data Acquisition, Cleaning, EDA, and Feature Engineering. Designed a Machine Learning pipeline with <span className="font-semibold text-[#38BDF8]">SMOTE for data balancing</span> and <span className="font-semibold text-[#38BDF8]">PCA for feature reduction</span>, achieving top performance with <span className="font-semibold text-[#38BDF8]">XGBoost (86% accuracy and 0.97 AUC)</span> for residential experience forecasting.
        </>
      ),
      image: resExpProjectImg,
      tags: ['R', 'XGBoost', 'PCA', 'SMOTE', 'Data Analysis'],
      presentation: resExpProjectPdf,
      video: 'https://youtu.be/BPJTSNJ0PAE',
    },
    {
      title: 'Colon Pathology Image Classification',
      description: (
        <>
          Machine Learning and Data Mining: Built an end-to-end data pipeline including preprocessing, model development, and hyperparameter tuning. Evaluated <span className="font-semibold text-[#38BDF8]">Random Forest</span>, <span className="font-semibold text-[#38BDF8]">MLP</span>, and <span className="font-semibold text-[#38BDF8]">CNN</span> models, achieving best performance with <span className="font-semibold text-[#38BDF8]">CNN (93% accuracy, 94% F1)</span>. Delivered a structured research report with key findings and insights.
        </>
      ),
      image: colonImageReportImg,
      tags: ['Machine Learning', 'CNN', 'MLP', 'Random Forest'],
      report: colonImageReportPdf,
    },
    {
      title: 'Company Acquisition Report',
      description: (
        <>
          Professional Practice in IT: Designed a simulated IT consultancy firm and developed a <span className="font-semibold text-[#38BDF8]">Human Resource Management System</span> integration proposal for Ernst & Young (EY). Planned and documented the integration process.
        </>
      ),
      image: companyAcqReportImg,
      tags: ['IT Consultancy', 'System Integration', 'Project Management', 'Human Resource Management System'],
      report: companyAcqReportPdf,
    },
    {
      title: 'eCommerce Web Application',
      description: (
        <>
          Web Application Development: Led the development of a <span className="font-semibold text-[#38BDF8]">full-stack web application</span>. Translated requirements into functional <span className="font-semibold text-[#38BDF8]">frontend interfaces</span> and <span className="font-semibold text-[#38BDF8]">backend logic</span>. Optimized page flow, data handling, and overall system usability based on structural insights from existing platforms.
        </>
      ),
      image: eComerceWebProjectImg,
      tags: ['Full-stack', 'UI Development', 'Backend Integration', 'Web Architecture'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen pt-32 pb-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-secondary rounded-2xl overflow-hidden border border-border shadow-sm card-hover flex flex-col"
            >
              <div className="relative overflow-hidden bg-border aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-text mb-3">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-border text-text text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {(project.github || project.demo || project.report || project.presentation || project.video) && (
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-red-600 hover:opacity-80 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        Report
                      </a>
                    )}
                    {project.presentation && (
                      <a
                        href={project.presentation}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-orange-600 hover:opacity-80 transition-colors"
                      >
                        <Presentation className="w-4 h-4" />
                        Presentation
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:opacity-80 transition-colors"
                      >
                        <Video className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
