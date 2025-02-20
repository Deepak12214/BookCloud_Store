import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../model/user.model.js';
import postModel from '../model/post.model.js';

export const register = async (req, res) => {
  try {
    const { email, password, username, name, age } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(300).send('User already registered');

    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create new user
    user = await userModel.create({
      username,
      name,
      age,
      email,
      password: hash,
    });
    
    return res.status(200).json({ message: 'Registration successful' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const login = async (req,res)=>{
  try {
  const {email,password} = req.body;
  let user = await userModel.findOne({email});
  if(!user) return res.status(500).json({ message: 'Something went wrong' });
   
  // Compare the password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ message: 'Something went wrong!' });

  // Generate a JWT token
  const token = jwt.sign({ email: email, userid: user._id }, 'Screate');
  res.cookie('token', token, { httpOnly: true });
  const Updateduser = await userModel.findOne({ email }).populate('posts');
  return res.status(200).json({
    message: 'Login successful',
    token, 
    user: {
        _id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
        age: user.age,
        profilepic: user.profilepic,
        posts : Updateduser.posts,
        savePost: user.savePost
    }
  });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
  
}; 

export const logout = (req,res)=>{
  res.cookie('token' , '');
  return res.status(200).json({ message: 'Logout successful' });
};

export const like = async (req,res)=>{
    const post = await postModel.findOne({_id : req.params.id }).populate('user');

  if(post.likes.indexOf(req.user.userid) === -1){
     post.likes.push(req.user.userid); 
  }
  else{
      post.likes.splice(post.likes.indexOf(req.user.userid) , 1);
  }
    await post.save();
    return res.status(200).json({ message: 'Like successful' });
  };
  export const ForgetPassword = async (req, res) => {
    try {
      const { email, password } = req.body;
      let user = await userModel.findOne({ email });
      if (!user) return res.status(500).json({ message: 'Something went wrong' });
  
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      await userModel.findOneAndUpdate({ email }, { password: hash });
  
      return res.status(200).json({ message: 'Password update successful' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
