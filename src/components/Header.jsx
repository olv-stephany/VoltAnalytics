import React from 'react'

const Header = () => {
  return (
    <header className="bg-(--vermelho) text-white py-4 px-6 flex justify-between items-center rounded-lg">
      <h1 className="font1 text-xl">
    VoltAnalytics
      </h1>
      <button className="font2 bg-white text-(--vermelho) py-2 px-3 rounded-lg font-bold cursor-pointer">
    Fale Conosco
      </button>
    </header>
  )
}

export default Header