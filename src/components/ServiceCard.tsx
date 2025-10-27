import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { Card } from './ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
}

export function ServiceCard({ title, description, icon: Icon, color, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="relative overflow-hidden h-full cursor-pointer group">
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
          style={{ background: color }}
        />
        
        <div className="p-6 relative z-10">
          <motion.div
            className="mb-4 inline-block"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: `${color}20` }}
            >
              <Icon className="w-7 h-7" style={{ color }} />
            </div>
          </motion.div>

          <motion.h3
            className="mb-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-gray-600"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-4 h-1 rounded-full"
            style={{ background: color }}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        <motion.div
          className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-20"
          style={{ background: color }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </Card>
    </motion.div>
  );
}
