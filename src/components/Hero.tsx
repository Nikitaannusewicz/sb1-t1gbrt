import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

interface HeroProps {
  setIsPlayerVisible: (isVisible: boolean) => void
}

const Hero: React.FC<HeroProps> = ({ setIsPlayerVisible }) => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533137098665-47ca60257cec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-4 text-yellow-400"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        >
          Иван "Рэп-Царь" Петров
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Легенда русского рэпа
        </motion.p>
        <div className="flex justify-center space-x-4">
          <motion.a
            href="#career"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Узнать больше
          </motion.a>
          <motion.button
            onClick={() => setIsPlayerVisible(true)}
            className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500 transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="mr-2" /> Слушать
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero