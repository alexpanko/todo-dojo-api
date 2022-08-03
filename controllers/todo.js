const Todo = require('../models/Todo');

// @desc        Get all todos
// @route       GET /api/v1/todo
// @access      Public
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc        Get single todo
// @route       GET /api/v1/todo/:id
// @access      Public
exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: `Todo not found with id of ${req.params.id}`,
    });
  }
};

// @desc        Create new todo
// @route       POST /api/v1/todo
// @access      Public
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);

    res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc        Update todo
// @route       PUT /api/v1/todo/:id
// @access      Public
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

// @desc        Delete todo
// @route       DELETE /api/v1/todo/:id
// @access      Public
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
