import React, { useState } from 'react';

// const Profile = ({ user, handleNewPost, handleLike, handleEdit }) => {
const Profile = () => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
          const response = await fetch('http://localhost:4001/post/newPost', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ content })
          });
          const data = await response.json();
          if (response.ok) {
            navigate('/profile');
          } else {
            console.log(data.message);
          }
    setContent('');
  };

  return (
    <div className='pt-28 px-10'>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-red-500 rounded-md">
          <img
            className="w-full h-full object-cover overflow-hidden"
            // src={`/images/${user.profilepic}`}
            src='/public/Thamnail.jpeg'
            alt="User Profile"
          />
        </div>
        <h3 className="text-3xl mb-5">
          <span className="font-light">Hello</span>,  Deepak👋 
        </h3>
      </div>
      <h5>You can create a new post.</h5>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="What's on your mind?"
          className="resize-none p-3 outline-none w-1/3 bg-transparent border-2 border-zinc-800"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          className="px-3 w-40 py-2 bg-blue-500 block rounded-md mt-2"
          placeholder="Create new post"
          type="submit"
        />
      </form>

      <div className="posts mt-20">
        <h3 className="text-zinc-400">Your Posts.</h3>
        <div className="postcontainer mt-5 flex gap-4 flex-wrap">
          {/* {user.posts.map((post) => (
            <div key={post._id} className="post w-3/12 p-4 rounded-md border-2 border-zinc-800 bg-zinc-900">
              <h4 className="text-blue-500 mb-2">{user.username}</h4>
              <p className="text-sm tracking-tight">{post.content}</p>
              <small>{post.likes.length} likes</small>
              <div className="btns flex gap-4 mt-5">
                <button
                  className="text-blue-500"
                  onClick={() => handleLike(post._id)}
                >
                  {post.likes.includes(user._id) ? 'Unlike' : 'Like'}
                </button>
                <button
                  className="text-zinc-600"
                  onClick={() => handleEdit(post._id)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))} */}
          <div  className="post w-3/12 p-4 rounded-md border-2 border-zinc-800 bg-zinc-900">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio aperiam tempora illo commodi nulla porro voluptate id inventore incidunt unde nobis, beatae quidem harum molestiae nam dicta pariatur optio minima provident voluptas, nemo facere fuga aut quod. Sed eveniet quibusdam adipisci hic nemo officia quam a sint incidunt dicta veritatis aut ipsa consequuntur quos et modi nam assumenda, explicabo quaerat nesciunt consectetur. Odio nisi expedita corporis? Dicta maiores facere inventore? Inventore similique illum consequuntur doloremque ipsum cum nisi culpa corrupti ab deserunt hic minus excepturi, non iste aut dolores fugit debitis? Odio eos magni vitae consequatur illum accusantium porro quos?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;



// const handleSubmit = (e) => {
//     e.preventDefault();
//     handleNewPost(content);
//     setContent('');
//   };

//   return (
//     <div>
//       <div className="flex items-start gap-3">
//         <div className="w-10 h-10 bg-red-500 rounded-md">
//           <img
//             className="w-full h-full object-cover overflow-hidden"
//             // src={`/images/${user.profilepic}`}
//             src='/public/Thamnail.jpeg'
//             alt="User Profile"
//           />
//         </div>
//         <h3 className="text-3xl mb-5">
//           <span className="font-light">Hello</span>,  👋 
//         </h3>
//       </div>
//       <h5>You can create a new post.</h5>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           placeholder="What's on your mind?"
//           className="resize-none p-3 outline-none w-1/3 bg-transparent border-2 border-zinc-800"
//           name="content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         />
//         <input
//           className="px-3 w-40 py-2 bg-blue-500 block rounded-md mt-2"
//           placeholder="Create new post"
//           type="submit"
//         />
//       </form>

//       <div className="posts mt-20">
//         <h3 className="text-zinc-400">Your Posts.</h3>
//         <div className="postcontainer mt-5 flex gap-4 flex-wrap">
//           {user.posts.map((post) => (
//             <div key={post._id} className="post w-3/12 p-4 rounded-md border-2 border-zinc-800 bg-zinc-900">
//               <h4 className="text-blue-500 mb-2">{user.username}</h4>
//               <p className="text-sm tracking-tight">{post.content}</p>
//               <small>{post.likes.length} likes</small>
//               <div className="btns flex gap-4 mt-5">
//                 <button
//                   className="text-blue-500"
//                   onClick={() => handleLike(post._id)}
//                 >
//                   {post.likes.includes(user._id) ? 'Unlike' : 'Like'}
//                 </button>
//                 <button
//                   className="text-zinc-600"
//                   onClick={() => handleEdit(post._id)}
//                 >
//                   Edit
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
