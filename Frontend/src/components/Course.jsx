import React from 'react'
import list from '/public/list.json';
import Cart from '../components/Cart';
import { NavLink } from 'react-router-dom';

function Course() {
  return (
    <div className='p-2 lg:w-10/12 pt-24  m-auto space-y-10'>
      <div className="">
        <h1 className='text-5xl'>We're delighted to have you <span className='text-purple-700'>Here!:)</span></h1>
        <p className='py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium accusamus harum facere recusandae libero ratione et! Hic repellat porro sint molestias error mollitia dolores, vitae amet magnam itaque, cupiditate deleniti illo necessitatibus nobis. Ab nulla porro, minima aut tempore asperiores dolore blanditiis, officiis, eius aliquid doloribus iste sapiente dolorem. Quod.</p>
      </div>
      <div className="flex justify-center">
      <NavLink to='/'><input className='bg-purple-800 p-2 rounded-lg px-3  cursor-pointer ' type="button" value="Back" /></NavLink>
      </div> 
      <div className="flex flex-wrap justify-center gap-4">
      {list.map((data)=>{
          return (<div className="flex justify-items-center ">
          <Cart key={data.id} name={data.name} title={data.title} image={data.image} category={data.category} />
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Course
