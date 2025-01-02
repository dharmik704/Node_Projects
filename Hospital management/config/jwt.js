const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {

    const tok = req.cookies;
    const token = tok.token;
    // console.log(token, '--authorization--');
    if (!token) {
        console.log('token is not found!!');
    }

    try {
        // verify to jwt token
        const isVerified = jwt.verify(token, 'hospital');
        req.user = isVerified.userdata;
        res.locals.user = req.user;
        // console.log(req.user);
        next();

    }
    catch (err) {
        console.log(err);
    }

}

// function to generate jwt token
const generateToken = (userData) => {
    // generate a new jwt token using userData  
    return jwt.sign(userData, 'hospital', { expiresIn: 3000 });
}


module.exports = { jwtAuthMiddleware, generateToken };