require("dotenv").config();
const express = require("express");

const app = express();
const rt = require("./routes/fetch");
const adminRoutes = require("./routes/admin");

app.use(express.json());
app.use("/api/fetch", rt);
app.use("/api/admin", adminRoutes);

app.listen(process.env.PORT, ()=>{
    console.log("Listening on PORT",process.env.PORT)
});