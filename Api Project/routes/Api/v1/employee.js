const express = require('express');

const routes = express.Router();

const emplctrl = require('../../../controllers/Api/v1/employeectrl');

const {jwtAuthMiddleware} = require('../../../config/jwt');

const passport = require('passport');

routes.post('/login', emplctrl.login);

routes.get('/profile', jwtAuthMiddleware, emplctrl.profile);

routes.put('/updateprofile/:id', jwtAuthMiddleware, emplctrl.updateprofile);

routes.get('/faillogin', async (req, res) => {
    return res.status(400).json({msg: 'Please First Login',status:0,responce:'error'});
})

module.exports = routes;