const express = require('express');

const routes = express.Router();

const userctrl = require('../../controllers/User/userctrl');

const passport = require('passport');

const {jwtAuthMiddleware, generateToken} = require('../../config/jwt');

routes.get('/', userctrl.login);

routes.get('/signup', userctrl.signup);

routes.post('/adduser', userctrl.adduser);

routes.post('/checklogin', userctrl.checklogin);

routes.get('/logout', async (req,res) => {
    try{
        res.clearCookie('token');
        return res.redirect('/user');
    }
    catch(err){
        console.log(err);
        console.log('Something want wrong!!')
    }
})

routes.get('/dashboard', jwtAuthMiddleware, userctrl.dashboard);

routes.get('/bookapointment', jwtAuthMiddleware, userctrl.bookapointment);

routes.get('/takeappointment/:id', jwtAuthMiddleware, userctrl.takeappointment);

routes.post('/confirmappointment/:id', jwtAuthMiddleware, userctrl.confirmappointment);

routes.get('/viewapointment', jwtAuthMiddleware, userctrl.viewapointment);

routes.get('/profile',jwtAuthMiddleware, userctrl.profile);

routes.get('/updateprofile/:id', jwtAuthMiddleware, userctrl.updateprofile);

routes.post('/editprofile/:id', jwtAuthMiddleware, userctrl.editprofile);

routes.get('/changepassword', jwtAuthMiddleware, userctrl.changepassword);

routes.post('/editpassword', jwtAuthMiddleware, userctrl.editpassword);

routes.get('/deactive/:id', jwtAuthMiddleware, userctrl.deactive);

// routes.get('/active/:id',  passport.usercheckAuth, userctrl.active);

// forgot password code

routes.get('/forgotpass', userctrl.forgotpass);

routes.post('/verifyemail', userctrl.verifyemail);

routes.get('/verifyotp', userctrl.verifyotp);

routes.post('/checkotp', userctrl.checkotp);

routes.get('/changepass', userctrl.changepass);

routes.post('/editpass', userctrl.editpass);

// end of forgot password code

// routes.use('/specialization', passport.checkAuth, require('./specialization'));

// routes.use('/doctor', passport.checkAuth, require('./doctor'));

module.exports = routes;