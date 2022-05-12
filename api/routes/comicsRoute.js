const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('layout', { template: 'comics' });
    });

    return router;
};