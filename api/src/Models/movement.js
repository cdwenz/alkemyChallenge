const { Datatypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('movement', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        concept: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        amount: {
            type: Datatypes.DECIMAL(10,2),
            allowNull: false,
        },
        type: {
            type: Datatypes.ENUM('income', 'expense'),
            allowNull: false,
        },
        date: {
            type: Datatypes.DATE,
            allowNull: false,
        }
    });
}