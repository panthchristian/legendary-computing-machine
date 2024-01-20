const s = require("./supaClient/supaClient");
const expr = require("express");

const app = expr();
const rt = require("./apiRoutes/routes");
const instRt = require("./apiRoutes/insertRoute");

app.listen(3000);

app.use("/api/routes", rt);
app.use("/api/insRoutes", instRt);
