
//mongoose
const mongoose = require("mongoose");

//schema för en todo
const todoSchema = new mongoose.Schema({
    title: { //titel på todo
        type: String,
        required: true, //måste
    },
    description: {
        type: String,
        required: true,  //måste
    },
    status: { 
        type: String,
        required: true,  //måste
    }
});

//skapar model
const oneTodoTask = mongoose.model("oneTodoTask", todoSchema);

//exporterar
module.exports = oneTodoTask;