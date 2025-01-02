const express = require('express');

const routes = express.Router();

const doctorctrl = require('../../controllers/Doctor/doctorctrl');

const {jwtAuthMiddleware, generateToken} = require('../../config/jwt');

const doctor = require('../../models/doctormdl');

routes.get('/', doctorctrl.login);

routes.post('/checklogin', doctorctrl.checklogin);

routes.get('/logout', async (req,res) => {
    try{
        res.clearCookie('token');
        return res.redirect('/doctor');
    }
    catch(err){
        console.log(err);
        console.log('Something want wrong!!')
    }
})

routes.get('/dashboard', jwtAuthMiddleware, doctorctrl.dashboard);

routes.get('/add_time', jwtAuthMiddleware, doctorctrl.add_time);

routes.post('/savetime', jwtAuthMiddleware, doctorctrl.savetime);

routes.get('/view_time', jwtAuthMiddleware, doctorctrl.view_time);

routes.get('/viewappointment', jwtAuthMiddleware, doctorctrl.viewappointment);

routes.get('/updatetime/:id', jwtAuthMiddleware, doctorctrl.updatetime);

routes.post('/edittime/:id', jwtAuthMiddleware, doctorctrl.edittime);

routes.get('/profile', jwtAuthMiddleware, doctorctrl.profile);

routes.get('/updateprofile/:id', jwtAuthMiddleware, doctorctrl.updateprofile);

routes.post('/editprofile/:id', jwtAuthMiddleware, doctor.uploadimage, doctorctrl.editprofile);

routes.get('/changepassword', jwtAuthMiddleware, doctorctrl.changepassword);

routes.post('/editpassword', jwtAuthMiddleware, doctorctrl.editpassword);

routes.get('/deactive/:id', jwtAuthMiddleware, doctorctrl.deactive);

routes.get('/active/:id', jwtAuthMiddleware, doctorctrl.active);

routes.get('/addpatientdetail/:id', jwtAuthMiddleware, doctorctrl.addpatientdetail);

routes.post('/insertpatient/:id', jwtAuthMiddleware, doctorctrl.insertpatient);

routes.get('/viewpatients', jwtAuthMiddleware, doctorctrl.viewpatients);

routes.get('/showpatientdetails/:id', jwtAuthMiddleware, doctorctrl.showpatientdetails);

// forgot password code

routes.get('/forgotpass', doctorctrl.forgotpass);

routes.post('/verifyemail', doctorctrl.verifyemail);

routes.get('/verifyotp', doctorctrl.verifyotp);

routes.post('/checkotp', doctorctrl.checkotp);

routes.get('/changepass', doctorctrl.changepass);

routes.post('/editpass', doctorctrl.editpass);

// end of forgot password code

// routes.use('/specialization', passport.checkAuth, require('./specialization'));

// routes.use('/doctor', passport.checkAuth, require('./doctor'));

module.exports = routes;