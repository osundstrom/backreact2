
//mongoose
const mongoose = require("mongoose");

//schema för en film
const todoSchema = new mongoose.Schema({
    title: { //titel på todo
        type: String,
        required: true, //måste
    },
    description: { //Betyg från IMDB
        type: String,
        required: true,  //måste
    },
    status: { //Om man sett den
        type: String,
        required: true,  //måste
    }
});

//skapar model
const oneTodoTask = mongoose.model("oneTodoTask", todoSchema);

//exporterar
module.exports = oneTodoTask;