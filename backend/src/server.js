import express from 'express';
import notesroutes from "./routes/notesroutes.js";

const app = express();


app.use("api/notes",notesroutes)

app.listen(5001,()=>{
  console.log("server started on port 5001");
})
