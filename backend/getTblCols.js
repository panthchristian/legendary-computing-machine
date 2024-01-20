const s = require("./supaClient/supaClient");
const express = require("express");
const app = express();
app.get("/getColumns/:tableName", async (req, res) => {
  const tableName = req.params.tableName;

  try {
    const { data, error } = await s.from(tableName).select("*").limit(1);

    if (error) {
      console.error("Error retrieving columns:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    const columns = Object.keys(data[0]);
    res.json({ columns });
  } catch (error) {
    console.error("Unexpected error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
