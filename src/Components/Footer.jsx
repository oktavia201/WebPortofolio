import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white p-6 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#">
          <img src="/img/Instagram.png" alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#">
          <img src="/img/github.png" alt="Github" className="w-6 h-6" />
        </a>
        <a href="#">
          <img src="/img/linkedin.png" alt="Linkedin" className="w-6 h-6" />
        </a>
      </div>
      <p>&copy; 2024 All Rights Reserved</p>
    </footer>
  )
}

export default Footer
