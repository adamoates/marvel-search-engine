const User = require('../models/users');
const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', async (req, res) => {
        const users = await User.find({});
        res.render('layout', { template: 'users', users });
    });

    return router;
};
