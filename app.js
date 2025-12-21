const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views");


app.use(express.json());

app.use("/api/am", require("./routes/bible.routes"));

app.get("/", (req, res) => {
  res.render("index");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
