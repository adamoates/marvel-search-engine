const User = require('../models/users');
const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/:id', async (req, res) => {
        const { id } = req.params;
        const user = await User.findById(id);
        res.render('layout', { template: 'user', user });
    });

    return router;
};
