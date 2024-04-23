const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const blogs = require("./api/blogsData.json");
const port = process.env.PORT || 5000;
const router = express.Router();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
  res.send("Blog server is running!");
});

router.get("/blogs", (req, res) => {
  res.json(blogs); // Return JSON instead of sending directly
});

router.get("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === id); // Use find instead of filter for single item
  if (blog) {
    res.json(blog); // Return JSON instead of sending directly
  } else {
    res.status(404).send("Blog not found"); // Send 404 status if blog is not found
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/blogsData", router);
module.exports.handler = serverless(app);
