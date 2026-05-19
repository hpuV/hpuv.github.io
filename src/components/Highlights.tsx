import { motion } from 'motion/react';
import { Calendar, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import winterCampImg from '../assets/images/WinterComputerCamp.JPG';
import filmClubImg from '../assets/images/FilmClubOfficer.jpg';
import jobFairImg1 from '../assets/images/ContactTaiwanJobFair1.jpeg';
import jobFairImg2 from '../assets/images/ContactTaiwanJobFair2.jpeg';

interface Activity {
  role: string;
  organization: string;
  year: string;
  images: string[];
  bullets: string[];
}

const activities: Activity[] = [
  {
    role: 'Bilingual Event Support Staff',
    organization: 'Contact Taiwan',
    year: '2026',
    images: [jobFairImg1, jobFairImg2],
    description: 'Supported the operations of a large-scale foreigner employment matching fair with 30+ participating companies and 500+ attendees. Assisting with attendee guidance, vendor coordination, interview schedule management, registration support, call-out assistance, and interview progress tracking, ensuring smooth and efficient event execution throughout the day.',
  },
  {
    role: 'Winter Camp Counsellor',
    organization: 'National Pingtung University',
    year: '2022',
    images: [ winterCampImg ],
    description: 'Led and supervised elementary school students during the "Winter Computer Education Camp", collaborating with a team to manage daily schedules, organize activities, and resolve conflicts to ensure a safe, engaging, and well-coordinated learning environment.',
  },
  {
    role: 'Equipment Officer',
    organization: 'National Pingtung University',
    year: '2021',
    images: [ filmClubImg ],
    description: 'Managed and maintained film equipment for the university’s 30-member lab, ensuring all devices were functional and up-to-date. Collaborated with the committee to coordinate schedules, support event planning, and train members on safe handling techniques.',
  }
];

function ActivityCard({ activity, index }: { activity: Activity; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-8 bg-bg-secondary rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="w-full md:w-2/5 aspect-w-16 aspect-h-9 md:h-auto relative rounded-2xl overflow-hidden flex-shrink-0 group bg-border/30">
        <div 
          className="absolute inset-0 flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {activity.images.map((img, i) => (
            <img 
              key={i}
              src={img} 
              alt={`${activity.role} image ${i + 1}`} 
              className="w-full h-full object-cover flex-shrink-0"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        {activity.images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 focus:opacity-100 focus:outline-none backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60 focus:opacity-100 focus:outline-none backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {activity.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className={`transition-all rounded-full drop-shadow-md ${
                    i === currentImageIndex 
                      ? 'w-5 h-1.5 bg-white' 
                      : 'w-1.5 h-1.5 bg-white/60 hover:bg-white/90'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
            
            {/* Bottom gradient for dot visibility */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-center py-2">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-text">{activity.role}</h3>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg border border-border text-sm font-medium text-text-muted shadow-sm">
            <Calendar className="w-4 h-4" />
            {activity.year}
          </div>
        </div>
        <div className="flex items-center gap-2 text-primary font-medium mb-6">
          <Building2 className="w-4 h-4" />
          {activity.organization}
        </div>
        <p className="leading-relaxed text-text-muted">{activity.description}</p>
      </div>
    </motion.div>
  );
}

export default function Highlights() {
  return (
    <section id="highlights" className="min-h-screen pt-32 pb-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <ActivityCard key={index} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}