const Todo = require('../models/Todo');

exports.getAll = async (req, res) => {
	const todos = await Todo.find();
	res.json(todos);
};


exports.create = async (req, res) => {
	const todo = new Todo(req.body);
	await todo.save();
	res.status(201).json(todo);
};


exports.update = async (req, res) => {
	const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
	res.json(updated);
};


exports.delete = async (req, res) => {
	await Todo.findByIdAndDelete(req.params.id);
	res.status(204).send();
};

