const jwt = require('jsonwebtoken');
const User = require('../models/User')

// Middleware to authenticate the user's token
const authenticateToken = (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    token = token.split(' ')[1]; // Remove the "Bearer " prefix
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};
// Middleware to check if the user is an admin
const authorizeAdmin = async(req, res, next) => {
  let token = req.header('Authorization');
  token = token.split(' ')[1]; // Remove the "Bearer " prefix
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const authorizedUser = await User.findOne({email:decoded.data})
  console.log(authorizedUser)
  if (authorizedUser.isAdmin){
    next()
  } else  {
    res.status(403).json({ error: 'Access denied. Only admins are allowed.' });
  }
}
// Middleware to check if the user is an admin
/* const checkIfAdmin = (req, res, next) => {
  const userId = req.user;
console.log(req.user)
  User.findById(userId, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!user.checkIfAdmin) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  });
};
const authorizeAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next(); // User is an admin, proceed to the next middleware
  } else {
    res.status(403).json({ error: 'Access denied. Only admins are allowed.' });
  }
}; */


module.exports = { authenticateToken, authorizeAdmin };



