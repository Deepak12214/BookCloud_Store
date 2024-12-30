import React from 'react'

const Cart = ({name,title,category,image}) => {
  return (
    <div className="card bg-base-100 w-72 shadow-sm z-0 border-2 border-purple-950 shadow-purple-900">
  <figure>
    <img
      src={image} 
      alt={name} />
  </figure>
  <div className="card-body ">
    <h2 className="card-title ">
    {name}
      <div className="badge badge-secondary bg-purple-700 border-purple-700">NEW</div>
    </h2>
    <p className='text-xs'>{title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  )
}

export default Cart
