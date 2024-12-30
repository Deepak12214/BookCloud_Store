import React from 'react';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './components/Banner';
import Course from './components/Course';
import Root from './components/Root';
import ImageSlider from './components/ImageSlider';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root />,  // Use the Main layout
      children: [
        {
          path: "/",
          element: <><Banner /> <ImageSlider/></>,  
        },
        {
          path: "/course",
          element: <Course />,  
        },
        {
          path: "/about",
          element: <About/>,  
        },
        {
          path: "/contact",
          element: <Contact />,  
        }
      ],
    },
    {
        path: "/logpage",
        element: <Login />,  
    }
  ]);

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
}

export default App;

