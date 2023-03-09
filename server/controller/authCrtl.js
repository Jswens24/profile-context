require('dotenv').config()
const { SECRET } = process.env
const bcrypt = require('bcryptjs')
const { User } = require('../models/user')

const jwt = require('jsonwebtoken');

const createToken = (username, id) => {
    return jwt.sign({ username, id }, SECRET, { expiresIn: '2 days' })
}




module.exports = {
    register: async (req, res) => {
        console.log('hit register')
        try {
            const { username, password } = req.body
            let foundUser = await User.findOne({ where: { username: username } })
            if (foundUser) {
                res.status(400).send('that username is already taken')
            } else {
                const salt = bcrypt.genSaltSync(5)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({
                    username,
                    hashedPass: hash
                })
                const token = createToken(newUser.dataValues.username, newUser.dataValues.id)
                const exp = Date.now() + 1000 * 60 * 60 * 48

                res.status(200).send({
                    username: newUser.dataValues.username,
                    userId: newUser.dataValues.id,
                    token,
                    exp
                })

            }

        } catch (err) {
            console.log(err)
            res.status(400).send('something is broken')
        }
    },
    login: async (req, res) => {
        console.log('hit login')

    }
}