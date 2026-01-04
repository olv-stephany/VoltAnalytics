import React from 'react'

const Header = () => {
  return (
    <header className="bg-(--vermelho) text-white p-4 flex justify-between items-center rounded-lg">
      <h1 className="font1 text-xl">
    VoltAnalytics
      </h1>
      <button className="bg-white text-(--vermelho) py-2 px-3">
    Fale Conosco
      </button>
    </header>
  )
}

export default Header