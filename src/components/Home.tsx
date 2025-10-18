'use client'

import { TypeAnimation } from 'react-type-animation'

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-center bg-gray-900 text-white"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              'Welcome to My Portfolio',
              2000,
              '92212996 이제혁',
              2000,
              "Let's go",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-400">
          Scroll down to see my works
        </p>
      </div>
    </section>
  )
}

export default Home
