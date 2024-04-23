const express = require("express");
const cors = require("cors");
const blogs = require("./api/blogsData.json");
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Blog server is running!");
});

app.get("/blogs", (req, res) => {
  res.json(blogs); // Return JSON instead of sending directly
});

app.get("/blogs/:id", (req, res) => {
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
