import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

const Albums: React.FC = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null)

  const albums = [
    { title: 'Уличные Хроники', year: 2013, cover: 'https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', tracks: ['Трек 1', 'Трек 2', 'Трек 3', 'Трек 4', 'Трек 5'] },
    { title: 'Рэп Революция', year: 2015, cover: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', tracks: ['Трек 1', 'Трек 2', 'Трек 3', 'Трек 4', 'Трек 5'] },
    { title: 'Золотая Эра', year: 2017, cover: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', tracks: ['Трек 1', 'Трек 2', 'Трек 3', 'Трек 4', 'Трек 5'] },
    { title: 'Империя Звука', year: 2019, cover: 'https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', tracks: ['Трек 1', 'Трек 2', 'Трек 3', 'Трек 4', 'Трек 5'] },
    { title: 'Новая Волна', year: 2021, cover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', tracks: ['Трек 1', 'Трек 2', 'Трек 3', 'Трек 4', 'Трек 5'] },
  ]

  return (
    <section id="albums" className="mb-20">
      <motion.h2
        className="text-5xl font-bold mb-10 text-center text-yellow-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Альбомы
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {albums.map((album, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedAlbum(index)}
          >
            <img src={album.cover} alt={album.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
              <p className="text-yellow-400">{album.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAlbum !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{albums[selectedAlbum].title}</h3>
                <button onClick={() => setSelectedAlbum(null)} className="text-gray-400 hover:text-white">
                  <X />
                </button>
              </div>
              <img src={albums[selectedAlbum].cover} alt={albums[selectedAlbum].title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <ul className="space-y-2">
                {albums[selectedAlbum].tracks.map((track, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-700 p-2 rounded">
                    <span>{track}</span>
                    <button className="text-yellow-400 hover:text-yellow-300">
                      <Play size={18} />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Albums