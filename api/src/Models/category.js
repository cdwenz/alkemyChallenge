const { Datatypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('category',{
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: Datatypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false
    })
}