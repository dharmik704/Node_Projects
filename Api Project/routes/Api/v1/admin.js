const express = require('express');

const routes = express.Router();

const {jwtAuthMiddleware} = require('../../../config/jwt');

const manager = require('../../../models/managermdl');

const adminctrl = require('../../../controllers/Api/v1/adminctrl');

const passport = require('passport');

routes.post('/register', adminctrl.register);

routes.post('/login', adminctrl.login);

routes.post('/addmanager', jwtAuthMiddleware, manager.uploadimage, adminctrl.addmanager);

routes.delete('/deletemanager/:id', jwtAuthMiddleware, adminctrl.deletemanager);

routes.get('/viewmanager', jwtAuthMiddleware, adminctrl.viewmanager);

routes.get('/viewemployee', jwtAuthMiddleware, adminctrl.viewemployee);

routes.delete('/deleteemployee/:id', jwtAuthMiddleware, adminctrl.deleteemployee);

routes.get('/faillogin', async (req, res) => {
    return res.status(400).json({ msg: 'Please First Login', status: 0, responce: 'error' });
})

module.exports = routes;