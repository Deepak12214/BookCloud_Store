import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import { toast } from 'react-toastify';

const Community = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [render, setRender] = useState(false);
  
  usePost(render);
  const token = useSelector((state) => state.token);
  const user=  useSelector((state)=> state?.user);
  const publicPost = useSelector((state) => state.post.publicPost);

  useEffect(() => {
      setPosts(publicPost);
    }, [publicPost]);

    const handleLike = async (postId) => {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/like/${postId}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast(res.data.message);
      setRender(!render);
    };
  
    const handleEdit = (postId,postContent) => {
      dispatch(addContent({
        postContent,
        postId,
      }));
      navigate('/edit');
    };

    
      return (
        <div className="w-full min-h-screen text-white p-10">
          <div className="posts mt-20">
          {user == undefined||null ?(<div className='min-h-96 pt-10 text-xl'>
        You have to login  🫠🫠
      </div>): (<div className="div">
                          <h3 className="text-zinc-400 text-2xl">New Posts..</h3>
            <div className="postcontainer mt-5 flex gap-4 flex-wrap">

{posts == undefined||null ?(
  <div className="post card-container p-4 rounded-md bg-zinc-900">
    Create Posts..😁😁
  </div>
): (
  posts.map((post) => (
    <div
      key={post._id}
      className="post card-container p-4 rounded-md bg-zinc-900 space-y-3 "
    >
      <h4 className="text-blue-500 text-lg mb-2">
        {post.user.username}
      </h4>
      <p className="text-sm tracking-tight ">{post.content}</p>
      <div className="div">
        <small >{post.likes.length} likes</small>
      <div className="btns flex gap-4">
        <button className="text-blue-500" onClick={() => handleLike(post._id)}>
          {post.likes.includes(user._id) ? 'Unlike' : 'Like'}
        </button>
        {user._id === post.user._id && (
          <button
            className="text-zinc-600"
            onClick={() => handleEdit(post._id, post.content)}
          >
            Edit
          </button>
        )}
      </div>
      </div>
      
    </div>
  ))
) }


            </div>
            </div>)}
            

          </div>
        </div>
      );
    };
export default Community



