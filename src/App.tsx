import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CareerHistory from './components/CareerHistory'
import Breakthroughs from './components/Breakthroughs'
import Albums from './components/Albums'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

function App() {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      <Header />
      <Hero setIsPlayerVisible={setIsPlayerVisible} />
      <main className="container mx-auto px-4 py-12">
        <CareerHistory />
        <Breakthroughs />
        <Albums />
      </main>
      <Footer />
      <MusicPlayer isVisible={isPlayerVisible} setIsVisible={setIsPlayerVisible} />
    </div>
  )
}

export default App