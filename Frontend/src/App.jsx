import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footers'

function App() {
  return (<>
      <Navbar/>
      <div className='p-2 lg:px-6'>
        <Banner/>
        <Footer/>
      </div>
    </>
  )
}

export default App
