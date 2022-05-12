const mongoose = require('mongoose');

const User = require('./models/users');

mongoose.connect('mongodb://localhost:27017/comics', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log('Error')
        console.log(err)
    });

const admin = new User({
    firstName: 'Adam',
    lastName: 'Oates',
    email: 'adam@adamcodertrader.com',
    password: '1234'
});

admin.save()
    .then(admin => {
        console.log(admin)
    }).catch(e => {
        console.log(e)
    })

const seedUsers = [
    {
        firstName: 'Adam',
        lastName: 'Oates',
        email: 'adamoates@cbaworks.org',
        password: 'CBAWORKS!'
    },
    {
        firstName: 'Charles',
        lastName: 'Edwards',
        email: 'charlesedwards@cbaworks.org',
        password: 'CBAWORKS!'
    },
];

User.insertMany(seedUsers)
    .then(
        res => {
            console.log(res)
        }
    ).catch(e => {
        console.log(e)
    });
