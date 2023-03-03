const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

app.post("/api/auth/login", (req, res) => {
  const body = req.body;

  if (body.email === "sahbikardipl@gmail.com" && body.password === "hello123") {
    const user = {
      email: body.email,
      userName:'sahbi'
    };

    return res.json(user);
  }
  res.status(500).json({ message: "login error" });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
