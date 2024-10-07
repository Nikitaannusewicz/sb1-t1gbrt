import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Pause, SkipBack, SkipForward } from 'lucide-react'

interface MusicPlayerProps {
  isVisible: boolean
  setIsVisible: (isVisible: boolean) => void
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isVisible, setIsVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg"
        >
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <img src="https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80" alt="Album cover" className="w-12 h-12 object-cover rounded-md mr-4" />
              <div>
                <h3 className="font-bold">Город не спит</h3>
                <p className="text-sm text-gray-400">Иван "Рэп-Царь" Петров</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipBack />
              </button>
              <button className="bg-yellow-400 text-gray-900 rounded-full p-2 hover:bg-yellow-300 transition-colors">
                <Play />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipForward />
              </button>
            </div>
            <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white transition-colors">
              <X />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MusicPlayer