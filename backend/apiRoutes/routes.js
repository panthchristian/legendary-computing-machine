const e = require("express");
const s = require("../supaClient/supaClient");

const router = e.Router();

async function fetchData(tblName) {
  try {
    const { data, error, status } = await s.from(tblName).select("*");

    if (error) {
      return { error, status };
    }

    return { data, status };
  } catch (error) {
    return { error: "Internal Server Error", status: 500 };
  }
}

router.get("/", (req, res) => {
  res.json("default route");
});

//route to list all admins
router.get("/adminList", async (req, res) => {
  const dt = await fetchData("adminMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

//route to list all university
router.get("/uniList", async (req, res) => {
  const dt = await fetchData("uniMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});
router.get("/mrkList", async (req, res) => {
  const dt = await fetchData("mrksMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

//route to list all course
router.get("/crsList", async (req, res) => {
  const dt = await fetchData("courseMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

//route to list all brnch
router.get("/brnchList", async (req, res) => {
  const dt = await fetchData("branchMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

//route to list all subject
router.get("/subList", async (req, res) => {
  const dt = await fetchData("subjectMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

//route to list all student
router.get("/stuList", async (req, res) => {
  const dt = await fetchData("studentMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

//route to list all fac
router.get("/facList", async (req, res) => {
  const dt = await fetchData("facultyMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

//route to list all tutor
router.get("/tutList", async (req, res) => {
  const dt = await fetchData("tutorMaster");
  if (dt.error) {
    return res.status(result.status).json({ error: dt.error });
  }
  res.json({ data: dt.data });
});

router.use((req, res) => {
  res.json("No routes found. Check api request");
});

module.exports = router;
