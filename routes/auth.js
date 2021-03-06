const router = require('express').Router();
const { User } = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register
router.post("/register", async (req, res)=>{
    
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = await new User({
            username: req.body.username,
            email: req.body.email, 
            password: hashedPassword
        });

        const user = await newUser.save();
        res.status(200).json(user)
    } catch(err){
        res.status(500)
    }
})

router.post('/login', (req, res, next) => {
    let getUser;
    User
    .findOne({
        email: req.body.email
    })
    .then((user) => {
        if(!user) {
            return res.status(401).json({
                message: 'Authentication failed',
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    })
    .then((response) => {
        if (!response) {
            return res.status(401).json({
                message: 'Authentication failed'
            });
        }
        let jwttoken = jwt.sign(
            {
                email: getUser.email,
                username: getUser.username,
                userId: getUser._id,
                role: getUser.role,
                following: getUser.following,
                img: getUser.profilePicture
            },
            'longer-secret-is-better',
            {
                expiresIn: '1h',
            }
        );
        res.status(200).json({
            token: jwttoken,
            expiresIn: 1000,
            msg: getUser,
        });
    })
    .catch((err) => {
        return res.status(401).json({
            message: 'Authentication failed',
        });
    });
}),

module.exports = router