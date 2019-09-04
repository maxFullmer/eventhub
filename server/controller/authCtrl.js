const bcrypt = require('bcrypt');
const User = require('../collections/users');

module.exports = {
    userSession: (req, res) => {
        res.status(200).send(req.session.user)
    },

    register:  (req, res, next) => {
        const saltRounds = 12;
        const {username, password, email} = req.body;

        
        User.find({email: email}).limit(1).then((foundUser) => {
            if (foundUser.length) {
                res.status(409).send('User already exists')
            } else {
                bcrypt.hash(password, saltRounds)
                .then((hashedPassword) => {
                    const user = new User({
                            username: username,
                            password: hashedPassword,
                            email: email,
                            userEvents: []
                    })

                    user.save().then((userDocReturned) => {
                        req.session.user = {
                            username: username,
                            user_id: userDocReturned._id,
                            userEvents: []
                        }
                        console.log(req.session.user)
                        res.send(req.session.user);
                    })
                    .catch((error) => {
                        console.log("Error saving user: ", error);
                        next();
                    });
                })
            }
        })

        
    },

    login: (req, res, next) => {
        let { username, password } = req.body;

        User.find({username: username}).limit(1)
            .then(([user]) => {
                bcrypt.compare(password, user.password)
                .then((samePassword) => {
                    if(!samePassword) {
                        res.status(403).send("Who goes there");
                    }

                    req.session.user = {
                        username: username,
                        user_id: user._id,
                        userEvents: user.userEvents
                    }

                    res.send(req.session.user);
                    })
                    .catch((error) => {
                        console.log("Error authenticating user: ", error);
                        next();
            });
        })
    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }
}