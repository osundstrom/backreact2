
//---------------------------Deklarerar----------------------------------//
//koa
const koa = require("koa");

//bodyparser
const bodyParser = require("koa-bodyparser");

//mongoose
const mongoose = require("mongoose");

//route
const router = require("./routes/todos.js"); 


const cors = require("@koa/cors");



//dotenv
require("dotenv").config();




//---------------------------Använder----------------------------------//

//använder koa
const app = new koa();

app.use(cors());

//använd bodyparser
app.use(bodyParser());

app.use(router.routes());

//---------------------------Ansluter----------------------------------//

mongoose.connect(process.env.URL)
  .then(() => {
    console.log("Connected")})
  .catch(error => {
    console.log("Failed", error)});


//---------------------------startar----------------------------------//

app.listen(process.env.PORT, () => {
    console.log("Servern startar");
});
