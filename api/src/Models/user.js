const { Datatypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });
}