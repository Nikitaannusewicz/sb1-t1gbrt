import React from 'react'
import { motion } from 'framer-motion'

const CareerHistory: React.FC = () => {
  const careerEvents = [
    { year: 2010, event: 'Начало карьеры в андеграунде Москвы' },
    { year: 2012, event: 'Выпуск первого микстейпа "Уличные Рифмы"' },
    { year: 2014, event: 'Победа в рэп-баттле "Слово против Слова"' },
    { year: 2016, event: 'Подписание контракта с лейблом "Русский Бит"' },
    { year: 2018, event: 'Первый сольный концерт в Олимпийском' },
    { year: 2020, event: 'Запуск собственного лейбла "Рэп Империя"' },
  ]

  return (
    <section id="career" className="mb-20">
      <motion.h2
        className="text-5xl font-bold mb-10 text-center text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Карьера
      </motion.h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
        <div className="space-y-12">
          {careerEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <div className="font-bold text-yellow-400 text-3xl mb-2">{event.year}</div>
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow inline-block">
                  <p className="text-lg">{event.event}</p>
                </div>
              </div>
              <div className="w-4 h-4 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerHistory