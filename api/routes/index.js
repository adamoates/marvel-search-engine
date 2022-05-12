const express = require('express');

const characterRoute = require('./characterRoute');
const charactersRoute = require('./charactersRoute');
const comicRoute = require('./comicRoute');
const comicsRoute = require('./comicsRoute');
const creatorRoute = require('./creatorRoute');
const creatorsRoute = require('./creatorsRoute');
const favoritesRoute = require('./favoritesRoute');
const loginRoute = require('./loginRoute')
const newReleaseRoute = require('./newReleaseRoute');
const profileRoute = require('./profileRoute');
const registerRoute = require('./registerRoute');
const userRoute = require('./userRoute');
const usersRoute = require('./usersRoute');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('layout', {
            template: 'index',
        });
    });

    router.use('/character', characterRoute());
    router.use('/characters', charactersRoute());
    router.use('/comic', comicRoute());
    router.use('/comics', comicsRoute());
    router.use('/creator', creatorRoute());
    router.use('/creators', creatorsRoute());
    router.use('/favorites', favoritesRoute());
    router.use('/login', loginRoute());
    router.use('/new_releases', newReleaseRoute());
    router.use('/profile', profileRoute());
    router.use('/register', registerRoute());
    router.use('/user', userRoute());
    router.use('/users', usersRoute());

    return router;
};
