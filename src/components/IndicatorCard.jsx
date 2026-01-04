import React from 'react'

const IndicatorCard = ({
  image,
  title,
  description
}) => {
  return (
    <div className="font2 flex flex-col p-4 bg-[#D9D9D9] max-w-2xs rounded-md">
      <img src={image} className="w-40 h-40 object-contain self-center mb-2" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  )
}

export default IndicatorCard