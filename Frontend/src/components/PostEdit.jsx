import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function PostEdit() {
    const navigate = useNavigate();
    const post = useSelector((state) => state.content);
    const [content, setContent] = useState('');
    useEffect(() => {
        if (post) {
          setContent(post.postContent);
        }
      }, [post]);
    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/post/edit/${post.postId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ content })
          });
          const data = await response.json();
          if (response.ok) {
          toast(data.message);
            navigate('/profile');
          } else {
            toast.error(data.message);
          }
    setContent('');
    };
  return (
    <div className='pt-28 px-10'>
      
      <h5 className='text-2xl py-4'>Edit your post...😎😎</h5>
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
    </div>
  )
}

export default PostEdit
