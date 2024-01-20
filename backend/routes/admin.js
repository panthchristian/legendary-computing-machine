const express = require("express");
const supabase = require("../supaClient/supaClient")
const {addAdmin} = require("../controllers/adminController")

const router = express.Router();

router.get('/',(req,res)=>{
    res.json("Insert default route")
})

router.post('/addAdmin', async (req, res) =>{
    const { adminEmail, adminPassword, adminFN} = req.body;

    let emptyFields = [];

    if (!adminEmail) {
        emptyFields.push("Email");
      }
      if (!adminPassword) {
        emptyFields.push("Password");
      }
      if (!adminFN) {
        emptyFields.push("First Name");
      }
      if (emptyFields.length > 0) {
        return res
          .status(400)
          .json({ error: "Please fill in all the fields", emptyFields });
      }

      const { data, error } = await supabase
  .from('adminMaster')
  .insert({ adminEmail: adminEmail, adminPassword: adminPassword, adminFN:adminFN})
  .select()

  if(error){
    res.status(400).json({error: error})
  }

  res.status(200).json(data)
});

module.exports = router;