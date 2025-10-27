import { motion } from 'motion/react';
import { ServiceCard } from './components/ServiceCard';
import { Palette, Code, Smartphone, Rocket, Zap, Globe } from 'lucide-react';

const services = [
  {
    title: 'UI/UX Design',
    description: 'Creating beautiful and intuitive user interfaces that delight your customers.',
    icon: Palette,
    color: '#FF6B6B'
  },
  {
    title: 'Web Development',
    description: 'Building responsive and performant websites using modern technologies.',
    icon: Code,
    color: '#4ECDC4'
  },
  {
    title: 'Mobile Apps',
    description: 'Developing cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
    color: '#95E1D3'
  },
  {
    title: 'Brand Strategy',
    description: 'Crafting compelling brand identities that resonate with your audience.',
    icon: Rocket,
    color: '#F38181'
  },
  {
    title: 'Performance Optimization',
    description: 'Optimizing your digital products for speed and efficiency.',
    icon: Zap,
    color: '#FFA07A'
  },
  {
    title: 'Global Reach',
    description: 'Expanding your digital presence across markets and platforms.',
    icon: Globe,
    color: '#6C5CE7'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Our Services
          </motion.h1>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Transforming ideas into exceptional digital experiences with cutting-edge technology and creative design
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
