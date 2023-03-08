const { sequelize } = require('../util/database')
const { DataTypes } = require('sequelize');

module.exports = {
    Profile: sequelize.define('profile', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        fav_color: DataTypes.STRING
    })
}
