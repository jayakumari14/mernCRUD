const express = require("express");
const cors = require("cors");
const userModel = require("./model/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/api/posts", async (req, res) => {
  const posts = [
    {
      id: 1,
      uname: "james",
      place: "chennai",
      job: "sotware developer",
    },
    {
      id: 2,
      uname: "harry",
      place: "cyprus",
      job: "data-analytic",
    },
    {
      id: 3,
      uname: "doe",
      place: "belarus",
      job: "data-scientist",
    },
    {
      id: 4,
      uname: "jenny",
      place: "canada",
      job: "sotware developer",
    },
    {
      id: 5,
      uname: "pam",
      place: "cuba",
      job: "sotware developer",
    },
  ];

  res.send(posts);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res) => {
  console.log(`listening to http://localhost:${PORT}...`);
});
