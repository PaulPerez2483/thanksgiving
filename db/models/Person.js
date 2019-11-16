const Sequelize = require('sequelize');
const { db } = require('../connection');
const { STRING, UUID, UUIDV4, BOOLEAN } = Sequelize;

const uniqueUUID = {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
}

const Person = db.define('person', {
    id: uniqueUUID,
    name: {
        type: STRING,
        allowNull: false
    },
    attendee: {
        type: BOOLEAN,
        defaultValue: false
    }
});

module.exports = { Person };
