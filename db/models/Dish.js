const Sequelize = require('sequelize');
const { db } = require('../connection');

const { STRING, UUID, UUIDV4 } = Sequelize;

const uniqueUUID = {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
}

const Dish = db.define('dish', {
    id: uniqueUUID,
    name: {
        type: STRING,
        allowNull: false
    },
    description: {
        type: STRING,
        allowNull: false
    }
});


module.exports = { Dish };
