var express = require("express");
var router = express.Router();
var express = require("express");
var router = express.Router();
var db = require("../models/index");
var bodyParser = require("body-parser");

//@type    GET
//@route   /api/todos
//@desc    Route to get todos
//@access  PUBLIC
router.get("/", (req, res) => {
   db.Todo.find()
      .then(todos => {
         res.json(todos);
      })
      .catch(err => {
         res.send(err);
      });
});

// bp
// create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({
   extended: false
});


//@type    POST
//@route   /api/todos
//@desc    Route to create todos
//@access  PUBLIC
router.post("/", urlencodedParser, (req, res) => {
   db.Todo.create(req.body)
      .then(newTodo => {
         res.status(201).json(newTodo);
      })
      .catch(err => res.send(err));
});

//@type    Get
//@route   /api/todos/:todoId
//@desc    Route to find todo by id
//@access  PUBLIC

router.get("/:todoId", (req, res) => {
   db.Todo.findById(req.params.todoId)
      .then(foundTodo => {
         res.json(foundTodo);
      })
      .catch(err => res.send(err));
});

//@type    PUT
//@route   /api/todos/:todoId
//@desc    updating todos
//@access  PUBLIC

router.put("/:todoId", urlencodedParser, (req, res) => {
   db.Todo.findOneAndUpdate({
         _id: req.params.todoId
      }, req.body, {
         new: true
      })
      .then(updatedtodo => {
         res.json(updatedtodo);
      })
      .catch(err => res.send(err));
});

//@type    DELETE
//@route   /api/todos/:todoId
//@desc    Deleting todos
//@access  PUBLIC

router.delete("/:todoId", (req, res) => {
   db.Todo.remove({
         _id: req.params.todoId
      })
      .then(() => {
         res.json({
            remove: "Todo Deleted"
         });
      })
      .catch(err => {
         res.send(err);
      });
});

module.exports = router;