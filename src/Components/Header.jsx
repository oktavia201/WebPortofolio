import React from 'react'

const Header = () => {
  return (
    <header className="bg-cyan-600 text-white p-8 flex items-center font-bold text-2xl w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl">Portofolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-white hover:text-cyan-400">
                About
              </a>
            </li>
            <li>
              <a href="#experiences" className="text-white hover:text-cyan-400">
                Experiences
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
