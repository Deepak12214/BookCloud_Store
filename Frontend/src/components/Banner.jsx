import React from 'react'

function Banner() {
  return (
  <div className='p-2 z-10 pt-32 lg:flex lg:mx-20 2xl:mx-36 justify-around '>
    <div className='text-5xl  lg:w-5/12'>
      Hello, welcomes here to learn something <span className='text-purple-800'>new everyday!!!</span>
      <p className='text-xl pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quasi est nobis impedit incidunt exercitationem ex, nostrum illum non provident quae quo molestias quas omnis at ab itaque debitis ratione atque optio dicta dolor, blanditiis vel esse. Est eius, magnam, autem debitis maxime quis blanditiis placeat nesciunt, delectus quam possimus.</p>
      <label className="mt-10 input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70 ">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn bg-purple-900">Button</button>
    </div>
    <div className=''>
        <img src="https://i.imgur.com/r4UfJ8V.png" />
    </div>
  </div>

  )
}

export default Banner
