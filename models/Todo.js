const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('Todo', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	completed: {
		type: DataTypes.BOOLEAN,
		defaultValue: false,
	},
}, {
	tableName: 'todos',
});

module.exports = Todo;