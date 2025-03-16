const express = require('express');
const rateLimit = require('express-rate-limit');
 
const apiLimiter = rateLimit({
    windowMs: 1000*60*3,   // 3 minutes
    max: 100,
    message: 'Too many requests, please try again after 3 minutes!'
});
const router = express.Router();
const userController = require('../controllers/users');
 
router.post('/users', apiLimiter, userController.createUser);
router.put('/users/:id', apiLimiter, userController.updateUser);
router.delete('/users/:id', apiLimiter, userController.deleteUser);
router.get('/users/:id', apiLimiter, userController.getUser);
router.get('/users', apiLimiter, userController.getUsers);

module.exports = router;