import TodoModel from "../models/TodoModel.js";

export const getTodoById = (req, res, next, todoId) => {
  TodoModel.findById(todoId).exec((err, todo) => {
    if (err || !todo) {
      return res.status(400).json({
        error: "404 todo not found",
      });
    }
    req.todo = todo;
    next();
  });
};

export const getAllTodos = (req, res) => {
  TodoModel.find()
    .sort("-createdAt")
    .exec((err, todos) => {
      if (err || !todos) {
        return res.status(400).json({
          error: "Something went wrong in finding all todos",
        });
      }
      res.json(todos);
    });
};

export const getTodo = (req, res) => {
  return res.json(req.todo);
};

export const createTodo = (req, res) => {
  const todo = new TodoModel({...req.body,"isDone": "false"});

  todo.save((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong",
      });
    }
    res.json({ task });
  });
};

export const updateTodo = (req, res) => {
  // take req.todo from getTodoById() middleware and
  // fetch the todo that user wants to update
  const todo = req.todo;
  // simply change the task of the todo that user want to update by
  // the task that user has sent in req.body.task
  req.body.task ? todo.task = req.body.task : null;
  req.body.isDone ? todo.isDone = req.body.isDone : null;
  // todo.isDone = req.body.isDone;

  // simply save that updated todo
  todo.save((err, t) => {
    if (err || !t) {
      return res.status(400).json({
        error: "something went wrong while updating",
      });
    }
    // send the updated todo as a json response
    res.json(t);
  });
};

export const deleteTodo = (req, res) => {
  // take req.todo from getTodoById() middleware and
  // fetch the todo that user wants to delete
  const todo = req.todo;
  // call .remove() method to delete it
  todo.remove((err, task) => {
    if (err || !task) {
      return res.status(400).json({
        error: "something went wrong while deleting the category",
      });
    }
    // send deleted todo and success message as a json response
    res.json({
      task_deleted: task,
      message: "Todo deleted successfully!",
    });
  });
};
