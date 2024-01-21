const supabase = require("../supaClient/supaClient");

// create admin
const addAdmin = async (req, res) => {
  const { adminEmail, adminPassword, adminFN } = req.body;

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
    .from("adminMaster")
    .insert({
      adminEmail: adminEmail,
      adminPassword: adminPassword,
      adminFN: adminFN,
    })
    .select();

  if (error) {
    res.status(400).json({ error: error });
  }

  res.status(200).json(data);
};

// fetch all admin data
const fetchAdmin = async (req, res) => {
  const { data, error } = await supabase
    .from("adminMaster")
    .select("id", "adminEmail", "adminFN");

  if (error) {
    res.status(400).json({ error: error });
  }

  res.status(200).json(data);
};

// delete Admin
const deleteAdmin = async (req, res) => {
  const { id } = req.query;

  const { error } = await supabase
    .from("adminMaster")
    .delete()
    .eq("id", parseInt(id));

  if (error) {
    res.status(400).json({ error: error });
  }

  res.status(200).json("Data Deleted Successfully");
};

// fetch specific admin
const fetchOneAdmin = async (req, res) => {
  const { id } = req.query;
  const intId = parseInt(id);
  const { data, error } = await supabase
    .from("adminMaster")
    .select("id , adminEmail, adminPassword, adminFN")
    .eq("id", intId);

  if (error) {
    res.status(400).json({ error: error });
  }

  res.status(200).json(data);
};

// update Admin
const updateAdmin = async (req, res) => {
  const { id, adminEmail, adminPassword, adminFN } = req.body;

  const intId = parseInt(id);
  const { data, error } = await supabase
    .from("adminMaster")
    .update({
      adminEmail: adminEmail,
      adminPassword: adminPassword,
      adminFN: adminFN,
    })
    .eq("id", intId)
    .select();

  if (error) {
    res.status(400).json({ error: error });
  }

  res.status(200).json(data);
};

//  /login admin
const loginAdmin = async (req, res) => {
  const { un, pass } = req.body;
  const { data, error } = await supabase
    .from("adminMaster")
    .select("id , adminEmail, adminPassword, adminFN")
    .match({ adminEmail: un, adminPassword: pass });

  if (error) {
    res.status(400).json({ error: error });
  }

  res.status(200).json(data);
};

module.exports = {
  addAdmin,
  fetchAdmin,
  deleteAdmin,
  fetchOneAdmin,
  updateAdmin,
  loginAdmin
};
