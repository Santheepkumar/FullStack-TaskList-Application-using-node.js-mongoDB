const mongoose = require("mongoose");
const express = require('express');

mongoose.set("debug", true);
mongoose.Promise = Promise;

//mongo connection
const db = require("../setup/myURL").mongoURL;

//Attempt to connect database
mongoose
    .connect(db)
    .then(() => console.log("Hey bro, MongoDB is Connected"))
    .catch(err => {
        console.log(err)
    });


module.exports.Todo = require('./todo');