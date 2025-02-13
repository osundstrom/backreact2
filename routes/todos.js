
//route
const Router = require('@koa/router');

//model
const oneTask = require("./model/oneTask.js");


//använd route
const router = new Router();

//---------------------------GET----------------------------------//

router.get("/todo", async (ctx) => { 
    try {
        //Hämtar alla todos 
        const todos = await oneTask.find(); 
        
        //om  inga todos finns
        if (todos.length < 1) {
            ctx.status = 400; // Bad Request
            ctx.message = "Inget att göra" //meddelande
        } else {
            ctx.body = todos; //annars visar

        }
    } catch (error) { //error
        ctx.status = 500; // server error
        ctx.body = {
            message: "Error", //meddelande
            error: error.message //skriver ut felet/errorn
        };
    }
});




router.get("/todo/:id", async (ctx) => { 
    const {id} = ctx.params; //hämtar id
    try {
        const selTask = await oneTask.findById(id); //hitta 
        if(!selTask) { //om ej hittas
            ctx.status = 404; // Not found
            ctx.body = {
                message: "Film finns ej", //meddelande
            };
            
        }else { //om den hittades
            ctx.status = 200; //Ok status
            ctx.body = selTask;
            
        }

    } catch (error) { //vid error
        ctx.status = 400; // Bad Request
        ctx.body = {
            message: "Misslyckad förfrågan", //meddelande
            error: error.message //skriver ut fel/error
        };
    }
});

//---------------------------POST----------------------------------//

router.post("/todo", async (ctx) => {
    try {
        //hämtar fälten från body.
        const { title, description, status } = ctx.request.body;

        //skapar en ny utav oneTask med bara de 3 från body
        const task = new oneTask({
            title,
            description,
            status
        });

        await task.save(); //sparar

        ctx.body = {
            message: "Todo tillagd", //meddelande
            task: task //Visar vad man sparat
        };
        ctx.status = 201; //skapad (created)
    } catch (error) { //vid error
        console.error(error);
        ctx.status = 400; // Bad Request
        ctx.body = {
            message: "Misslyckad, samtliga fält måste vara ifyllda. ", //meddelande
            error: error.message //vad som är fel/error
        };
    }
});


//---------------------------DELETE----------------------------------//

router.delete("/todo/:id", async (ctx) => {
    const {id} = ctx.params; //hämtar id
    try {
        const deleteTask = await oneTask.findByIdAndDelete(id); //hitta och ta bort baserat på id
        if(!deleteTask) { //om ej hittas
            ctx.status = 404; // Not found
            ctx.body = {
                message: "Vald uppgift hittas ej", //meddelande
            };
            
        }else { //om den hittades och då raderades
            ctx.status = 200; //Ok status
            ctx.body = {
                message: "Todo raderad", //meddelande
            }
        }

    } catch (error) { //vid error
        ctx.status = 400; // Bad Request
        ctx.body = {
            message: "Misslyckad förfrågan", //meddelande
            error: error.message //skrive rut fel/error
        };
    }
});

//---------------------------PUT----------------------------------//

router.put("/todo/:id", async (ctx) => {
    const {id} = ctx.params; //Hämtar id
    try {
        //hittar och uppdaterar baserat på id
        const updateTodo = await oneTask.findByIdAndUpdate(id, ctx.request.body); 

        //om ej hittar
        if(!updateTodo) {
            ctx.status = 404; // Not found
            ctx.body = {
                message: "Todo finns ej", //meddelande
            };
            
        }else {
            ctx.status = 200; //ok
            
            ctx.body = {
                message: "Todo ändrad", //meddelande
            };
        }

    } catch (error) { //vid error
        console.error(error);
        ctx.status = 400; // Bad request
        ctx.body = {
            message: "Misslyckad", //meddelande
            error: error.message //mer info om error/fel
        };
    }
});



//export
module.exports = router; 