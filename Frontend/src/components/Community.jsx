import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
// import posts from '../assets/posts.json';

const Community = () => {

  const user=  useSelector((state)=> state?.user);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async ()=>{
      try {
        const res = await axios.get('http://localhost:4001/post/getPost');
        setPosts(res.data);        
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  },[]);

  const handleLike = (postId) => {
    e.preventDefault();
    console.log(`Liking post with ID: ${postId}`);
    
  };

  const handleEdit = (postId) => {
    e.preventDefault();
    console.log(`Editing post with ID: ${postId}`);
    // Add edit functionality here (e.g., navigate to an edit page)
  };
      return (
        <div className="w-full min-h-screen bg-zinc-900 text-white p-10">
          <div className="posts mt-20">
            <h3 className="text-zinc-400">New Posts.</h3>
            <div className="postcontainer mt-5 flex gap-4 flex-wrap">
            {user && posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post._id}
                className="post w-3/12 p-4 rounded-md border-2 border-zinc-800 bg-zinc-900"
              >
                <h4 className="text-blue-500 mb-2">{post.user.username}</h4>
                <p className="text-sm tracking-tight">{post.content}</p>
                <small>{post.likes.length} likes</small>
                <div className="btns flex gap-4 mt-5">
                  <button
                    className="text-blue-500"
                    onClick={() => handleLike(post._id)}
                  >
                    {post.likes.includes(user._id) ? 'Unlike' : 'Like'}
                  </button>
                  {user._id === post.user._id && (
                    <button
                      className="text-zinc-600"
                      onClick={() => handleEdit(post._id)}
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>{console.log(user)};
        {console.log(posts)};
            
              Loading.....</p>
          )}
            </div>
          </div>
        </div>
      );
    };
export default Community






// import React from 'react';

// const Home = ({ posts, user, handleLike, handleEdit }) => {
//   return (
//     <div className="w-full min-h-screen bg-zinc-900 text-white p-10">
//       <div className="nav flex w-full justify-end gap-6">
//         <a className="bg-blue-500 rounded-md px-3 py-2 text-sm mb-5 inline-block" href="/home">
//           Home
//         </a>
//         <a className="bg-blue-500 rounded-md px-3 py-2 text-sm mb-5 inline-block" href="/profile">
//           Profile
//         </a>
//         <a className="bg-red-500 rounded-md px-3 py-2 text-sm mb-5 inline-block" href="/logout">
//           Logout
//         </a>
//       </div>

//       <div className="posts mt-20">
//         <h3 className="text-zinc-400">New Posts.</h3>
//         <div className="postcontainer mt-5 flex gap-4 flex-wrap">
//           {posts.map((post) => (
//             <div key={post._id} className="post w-3/12 p-4 rounded-md border-2 border-zinc-800 bg-zinc-900">
//               <h4 className="text-blue-500 mb-2">{post.user.username}</h4>
//               <p className="text-sm tracking-tight">{post.content}</p>
//               <small>{post.likes.length} likes</small>
//               <div className="btns flex gap-4 mt-5">
//                 <button
//                   className="text-blue-500"
//                   onClick={() => handleLike(post._id)}
//                 >
//                   {post.likes.includes(user._id) ? 'Unlike' : 'Like'}
//                 </button>
//                 {user._id === post.user._id && (
//                   <button
//                     className="text-zinc-600"
//                     onClick={() => handleEdit(post._id)}
//                   >
//                     Edit
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

