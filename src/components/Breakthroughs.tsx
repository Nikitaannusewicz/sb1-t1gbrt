import React from 'react'
import { Award, TrendingUp, Users, Music } from 'lucide-react'
import { motion } from 'framer-motion'

const Breakthroughs: React.FC = () => {
  const breakthroughs = [
    {
      title: 'Прорыв в мейнстрим',
      year: 2015,
      description: 'Сингл "Город не спит" попал в топ-10 чартов и принес национальную известность.',
      icon: TrendingUp
    },
    {
      title: 'Коллаборация с мировой звездой',
      year: 2017,
      description: 'Совместный трек с американским рэпером Кендриком Ламаром открыл двери на международную сцену.',
      icon: Users
    },
    {
      title: 'Рекорд по стримам',
      year: 2019,
      description: 'Альбом "Империя Звука" набрал более 1 миллиарда прослушиваний на стриминговых платформах.',
      icon: Music
    },
    {
      title: 'Признание критиков',
      year: 2021,
      description: 'Получение престижной музыкальной премии "Грэмми" в категории "Лучший международный рэп-альбом".',
      icon: Award
    }
  ]

  return (
    <section id="breakthroughs" className="mb-20">
      <motion.h2
        className="text-5xl font-bold mb-10 text-center text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Главные прорывы
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {breakthroughs.map((breakthrough, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex items-center mb-4">
              <breakthrough.icon className="w-10 h-10 text-yellow-400 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold">{breakthrough.title}</h3>
                <p className="text-yellow-400">{breakthrough.year}</p>
              </div>
            </div>
            <p>{breakthrough.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Breakthroughs