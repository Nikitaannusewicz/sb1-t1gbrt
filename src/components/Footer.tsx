import React from 'react'
import { Instagram, Twitter, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            className="text-2xl font-bold text-yellow-400 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Иван "Рэп-Царь" Петров
          </motion.div>
          <div className="flex space-x-8">
            {[Instagram, Twitter, Youtube].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">Подпишитесь на новости и эксклюзивный контент</p>
          <form className="flex justify-center">
            <input
              type="email"
              placeholder="Ваш email"
              className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-r-full font-bold hover:bg-yellow-300 transition-colors"
            >
              Подписаться
            </button>
          </form>
        </motion.div>
        <motion.p
          className="text-center text-gray-400 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © 2023 Иван "Рэп-Царь" Петров. Все права защищены.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer