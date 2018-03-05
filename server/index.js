const express = require("express");
const { json } = require("body-parser");
const path = require("path");

const journalController = require(`${__dirname}/controllers/journal_controller`);

const app = express();

app.use(json());
app.use(express.static(path.join(__dirname, "../public/build")));

const baseUrl = "/api/journal";
app.post(baseUrl, journalController.addPost);
app.get(baseUrl, journalController.getPosts);
app.get(`${baseUrl}/:id`, journalController.getPost);
app.put(`${baseUrl}/:id`, journalController.updatePost);
app.delete(`${baseUrl}/:id`, journalController.deletePost);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
