const e = require("express");
const s = require("../supaClient/supaClient");

const router = e.Router();
router.get('/',(req,res)=>{
    res.json("Insert default route")
})
module.exports = router;