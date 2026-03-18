import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import { desc } from 'motion/react-client';
import winterCampImg from '../assets/images/WinterComputerCamp.JPG';
import filmClubImg from '../assets/images/FilmClubOfficer.jpg';

export default function Highlights() {
  const activities = [
    {
      role: 'Winter Camp Counsellor',
      organization: 'National PingTung University',
      year: '2022',
      image: winterCampImg,
      description: 'Led and supervised elementary school students during the "Winter Computer Education Camp", collaborating with a team to manage daily schedules, organize activities, and resolve conflicts to ensure a safe, engaging, and well-coordinated learning environment.',
    },
    {
      role: 'Equipment Officer',
      organization: 'National PingTung University',
      year: '2021',
      image: filmClubImg,
      description: 'Managed and maintained film equipment for the university’s 30-member lab, ensuring all devices were functional and up-to-date. Collaborated with the committee to coordinate schedules, support event planning, and train members on safe handling techniques.',
    }
  ];

  return (
    <section id="highlights" className="min-h-screen pt-32 pb-24 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 bg-bg-secondary rounded-3xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full md:w-2/5 aspect-w-16 aspect-h-9 md:h-auto relative rounded-2xl overflow-hidden flex-shrink-0">
                <img 
                  src={activity.image} 
                  alt={activity.role} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
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
                  <MapPin className="w-4 h-4" />
                  {activity.organization}
                </div>
                <p className="leading-relaxed text-text-muted">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
