const Todo = require('../models/Todo');

exports.getAll = async (req, res) => {
	const todos = await Todo.findAll();
	res.json(todos);
};


exports.create = async (req, res) => {
	const todo = await Todo.create({title: req.body.title});
	res.json(todo);
};


exports.update = async (req, res) => {
	const todo = await Todo.findByPk(req.params.id);
	if (!todo) {
		return res.status(404).json({message: 'Todo not found'});
	}
	
	todo.title = req.body.title;
	todo.completed = req.body.completed;
	const updated = await todo.save();

	res.json(updated);
};


exports.delete = async (req, res) => {
	const todo = await Todo.findByPk(req.params.id);
	if (!todo) {
		return res.status(404).json({message: 'Todo not found'});
	}
	
	await todo.destroy();

	res.json({message: 'Todo deleted'});
};

