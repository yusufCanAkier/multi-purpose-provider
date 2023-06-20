const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:3000'
}
));

app.get("/", (req,res) => {
    res.json({name: 'Wow', Subscribe: true})
})

app.listen(7070, ()=> console.log("Server is Listening on 5000"))