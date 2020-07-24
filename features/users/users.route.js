
var Users = require('./users.controller');

module.exports = function(router) {
    router.post('/user', Users.createUser);
    router.get('/user', Users.getUsers);
    router.post('/login', Users.login);
    // router.get('/get/:name', Heros.getHero);
    // router.put('/update/:id', Heros.updateHero);
    // router.delete('/remove/:id', Heros.removeHero);
}