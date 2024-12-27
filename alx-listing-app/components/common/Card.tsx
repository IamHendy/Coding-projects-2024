import React from 'react';

interface CardProps {
    title:string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({title, description, imageUrl}) => {
  return (
    <div className='border rounded-lg shadow-md overflow-hidden'>
         <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default Card
