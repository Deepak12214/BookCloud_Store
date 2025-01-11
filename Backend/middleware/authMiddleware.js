import jwt from 'jsonwebtoken';

// Middleware to protect routes
export const protectRoute = async (req, res, next) => {
    const token = req.cookies.token;
    
    // If token is not found
    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }
    try {
        let data = jwt.verify(token,'Screate');
        req.user = data;
        next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
}
