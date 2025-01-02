const express = require('express');

const routes = express.Router();

const adminctrl = require('../controllers/adminctrl');

const admin = require('../models/adminmdl');

const passport = require('passport');

const { jwtAuthMiddleware } = require('../config/jwt');

routes.get('/', adminctrl.login);

routes.post('/checklogin', adminctrl.checklogin);

routes.get('/logout', async (req,res) => {
    
    try{
        res.clearCookie('token');
        return res.redirect('/admin');
    }
    catch(err){
        console.log(err);
        console.log('Something want wrong!!')
    }

})

routes.get('/dashboard', jwtAuthMiddleware, adminctrl.dashboard);

routes.get('/add_admin', jwtAuthMiddleware, adminctrl.addadmin);

routes.post('/insertadmin', jwtAuthMiddleware, admin.uploadimage, adminctrl.insertadmin);

routes.get('/view_admin', jwtAuthMiddleware, adminctrl.viewadmin);

routes.get('/deleteadmin', jwtAuthMiddleware, adminctrl.deleteadmin);

routes.get('/updateadmin', jwtAuthMiddleware, adminctrl.updateadmin);

routes.post('/editadmin/:id', jwtAuthMiddleware, admin.uploadimage, adminctrl.editadmin);

routes.get('/profile', jwtAuthMiddleware, adminctrl.profile);

routes.get('/changepassword', jwtAuthMiddleware, adminctrl.changepassword);

routes.post('/editpassword', jwtAuthMiddleware, adminctrl.editpassword);

routes.get('/deactive/:id', jwtAuthMiddleware, adminctrl.deactive);

routes.get('/active/:id', jwtAuthMiddleware, adminctrl.active);

// forgot password code

routes.get('/forgotpass', adminctrl.forgotpass);

routes.post('/verifyemail', adminctrl.verifyemail);

routes.get('/verifyotp', adminctrl.verifyotp);

routes.post('/checkotp', adminctrl.checkotp);

routes.get('/changepass', adminctrl.changepass);

routes.post('/editpass', adminctrl.editpass);

// end of forgot password code

routes.use('/specialization', jwtAuthMiddleware, require('./specialization'));

routes.use('/doctor', jwtAuthMiddleware, require('./doctor'));

module.exports = routes;