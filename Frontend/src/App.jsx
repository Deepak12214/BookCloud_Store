import React from 'react';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Banner from './components/Banner';
import Root from './components/Root';
import ImageSlider from './components/ImageSlider';
import Login from './components/Login';
import About from './components/About';
import Profile from './components/Profile';
import Community from './components/Community';
import ForgetPassword from './components/ForgetPassword';
import PostEdit from './components/PostEdit';
import Books from './components/Books';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Root />, 
      children: [
        {
          path: "/",
          element: <><Banner /> <ImageSlider/></>,  
        },
        {
          path: "/Community",
          element: <Community/>,  
        },
        {
          path: "/About",
          element: <About />,  
        },
        {
          path: "/profile",
          element: <Profile />,  
        },
        {
          path: "/edit",
          element: <PostEdit/>,  
        },
        {
          path: "/books",
          element: <Books/>,
          children : [
            {
              path: "/books/:resId",
              element:<Books/>,  
            },
          ] 
        }
      ],
    },
    {
        path: "/logpage",
        element: <Login />,  
    },
    {
      path: "/forgetpassword",
      element: <ForgetPassword />,  
    }
  ]);

  return (
    <RouterProvider router={appRouter}>
    </RouterProvider>
  );
}

export default App;

