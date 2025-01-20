import postModel from '../model/post.model.js';
import userModel from '../model/user.model.js';


export const createNewPost = async (req,res)=>{
  let user = await userModel.findOne({email:req.user.email});
  const {content} =req.body;
  const post = await postModel.create({
      user : user._id,
      content
  });
  user.posts.push(post._id);
  await user.save();
  return res.status(200).json({ message: 'Upload New Post successful' });
}

export const getPost=async (req,res)=>{
  try {
      const posts = await postModel.find({}).populate('user');
      res.status(200).json(posts);
      
  } catch (error) {
      console.log("Error: ",error);
      res.status(500).json(error);
  }
};

export const updatePost = async (req,res)=>{
    try {
      const post = await postModel.findOneAndUpdate({_id : req.params.id} , {content : req.body.content});
      return res.status(200).json({ message: 'Edit Post successful' });
    } catch (error) {
      console.log("Error: ",error);
      res.status(500).json(error);
    }
  };

export const getOwnPost = async (req,res)=>{
try { 
   const user = await userModel.findOne({_id : req.user.userid }).populate('posts');
  return res.status(200).json({
    message: 'request successful', 
    posts : user.posts,
})
  
} catch (error) {
  res.status(500).json({ message: 'Server error', error });
}

};

export const deletePost = async(req,res) =>{
  try {
    const post = await postModel.findOne({_id : req.params.id});
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const user = await userModel.findOne({_id : req.user.userid })
    if (!user.posts.includes(post._id)) {
      return res.status(403).json({ message: 'Unauthorized to delete this post' });
    }

    user.posts = user.posts.filter(postId => postId.toString() !== post._id.toString());

    await postModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: 'Server error', error });
  }
};