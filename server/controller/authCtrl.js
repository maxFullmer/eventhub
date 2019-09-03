const bcrypt = require('bcrypt');
const User = require('../collections/users');

module.exports = {
    userSession: (req, res) => {
        res.status(200).send(req.session.user)
    },

    register:  (req, res, next) => {
        const saltRounds = 12;
        const {username, password, email} = req.body;

        bcrypt.hash(password, saltRounds)
        .then((hashedPassword) => {
            return User.save({
                username: username,
                password: hashedPassword,
                email: email,
                userEvents: []
            });
        })
        .then(() => {
            req.session.user = {
                username: username,
                userEvents: []
            }
            res.send(req.session.user);
        })
        .catch((error) => {
            console.log("Error saving user: ", error);
            next();
        });
    },

    login: (req, res, next) => {
        let { username, password } = req.body;

        User.findOne(username)
            .then((user) => {
                return bcrypt.compare(password, user.password);
            })
            .then((samePassword) => {
                console.log(samePassword)
                if(!samePassword) {
                    res.status(403).send();
                }
                req.session.user = {
                    username: username,
                    userEvents: User.findOne(username).then((userObj) => {return userObj.userEvents}).catch((err) => {console.log(err)})
                }
                res.send(req.session.user);
            })
            .catch((error) => {
                console.log("Error authenticating user: ", error);
                next();
            });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send([]);
    }
}