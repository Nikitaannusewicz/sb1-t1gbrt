import React, { useState, useEffect } from 'react'
import { Mic2 } from 'lucide-react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`py-4 sticky top-0 z-10 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-900 bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mic2 className="w-8 h-8 mr-2 text-yellow-400" />
          <h1 className="text-2xl font-bold">Иван "Рэп-Царь" Петров</h1>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {['career', 'breakthroughs', 'albums'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <a
                  href={`#${item}`}
                  className="hover:text-yellow-400 transition-colors uppercase tracking-wider"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header