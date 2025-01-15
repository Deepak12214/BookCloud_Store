import React, { useState, useEffect } from 'react';

const Cart = ({ name, title, category, image, description ,size}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
  };
  const shortDescription = description?.slice(0, 40);
  const fullDescription = description;

  useEffect(() => {
    let timer;
    if (isHovered) {
      timer = setTimeout(() => {
        setIsExpanded(true); 
      }, 1500);
    } else {
      clearTimeout(timer); 
      setIsExpanded(false); 
    }
    return () => clearTimeout(timer); 
  }, [isHovered]);

  return (
    <div
      className={`card bg-base-200 w-80 shadow-sm z-0 border-2 border-purple-950 shadow-purple-900 transition-all duration-500 relative ${size?'w-96 ':''}`}
      style={{
        height: isExpanded ? 'absolute auto' : `${size?'':'350px'}`,
        transition: 'height 0.5s ease, transform 0.5s ease',
        transform: isExpanded ? 'scale(1.05)' : 'scale(1)', 
        zIndex: isExpanded ? '10' : '1', 
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)} 
    >
      
      <div className={isExpanded ? 'bg-base-200 h-auto  border-2 border-purple-600 rounded-xl' : ''}>
      <figure>
        <img
          src={image}
          alt={name}
          style={{ width: `${size?'80% ':'30%'}`, height: 'auto' }} 
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary bg-purple-700 border-purple-700">NEW</div>
        </h2>
        <p className="text-gray-600 ">
          {isExpanded ? fullDescription : `${shortDescription}...`}
        </p>
        <button
          onClick={handleShowMore}
          className="text-purple-700 hover:text-purple-500 text-sm"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
