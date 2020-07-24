var Users = require('./users.dao');

exports.createUser = function (req, res) {
    var user = {
        user_id: req.body.userId,
        password: req.body.password,
        f_name: req.body.firstName,
        l_name: req.body.lastName,
        type: req.body.type
    };

    Users.create(user, function (err, user) {
        if (err) {
            res.status(404).json({ err });
            // stop further execution in this callback
            return;
        }
        res.json({
            message: "User created successfully"
        })
    });

}


exports.getUsers = function(req, res, next) {
    Users.get({}, function(err, users) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            users: users
        })
    })
}

exports.login = function(req, res, next) {
    const userDetails = {
        userId: req.body.userId,
        password: req.body.password,
    }
    Users.login({userId: userDetails.userId }, function(err, user) {
        if(err) {
            res.json({
                error: err
            })
        }
        if(user && userDetails.password === user.password){
            const sendUserdata = {
                firstName: user.f_name,
                lastName: user.l_name,
                type: user.type,
                userId: user.user_id
            }
            res.json(
                sendUserdata
            )
        } else {
            res.json({
                error: 'login failed'
            })
        }
    })
}