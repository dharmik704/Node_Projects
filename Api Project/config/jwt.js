const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {

    // const tok = req.cookies;
    // console.log(tok);
    // const token = tok.token;
    // console.log(token, '--authorization--');
    const token = req.headers['authorization'].split(' ')[1];
    // console.log(token);
    if (!token) {
        return res.status(400).json({ msg: 'Access denied. No token provided!!', status: 0, response: 'error' });
    }

    try {
        // verify to jwt token
        const isVerified = jwt.verify(token, 'admin');
        req.user = isVerified;
        // res.locals.user = req.user;
        next();

    }
    catch (err) {
        console.log(err);
        return res.status(400).json({ msg: 'Invalid token!!', status: 0, response: 'error' });
    }

}

// function to generate jwt token
const generateToken = (userData) => {
    // generate a new jwt token using userData  
    return jwt.sign(userData, 'admin', { expiresIn: 3000 });
}


module.exports = { jwtAuthMiddleware, generateToken };