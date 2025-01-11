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
