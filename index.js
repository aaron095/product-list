import data from "./data.json" assert { type: 'json' };
import express from "express";


const app = express();
const port = 3000;

app.use(express.static("public"));


app.get("/", (req, res) => {
    
    res.render("index.ejs", {content: data[0].name});
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  