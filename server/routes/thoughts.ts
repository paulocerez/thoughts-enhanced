const thoughtsRouter = require("express").Router();

thoughtsRouter.get("/api/posts/all", async (req, res) => {
  try {
    const thoughts = await prisma.post.findMany();
    res.json(thoughts);
  } catch (error) {
    console.error("Error retrieving entries:", error);
    res.status(500).json({ error: "Failed to retrieve entries" });
  }
});

app.get("/api/posts/:id", (req, res) => {
  const thoughtId = req.params.id;
});

// Post-related routes

app.post("/api/posts", async (req, res) => {
  try {
    // destructuring the request body -> extract properties
    const { title, category, thought }: PostBody = req.body;
    const post = await prisma.post.create({
      data: {
        // userId: currentUser.id,
        title,
        category,
        thought,
      },
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to create post" });
  }
});

// delete a post
app.delete("/api/posts/:id", async (req, res) => {
  // id as the unique identifier in the database for the post to be deleted
  const { id } = req.params;
  await prisma.post.delete({ where: { id: Number(id) } });
  res.sendStatus(204);
});

// Update a post
app.put("/api/posts/:postId", async (req, res) => {
  const { title, category, thought } = req.body;
  const { postId } = req.params;

  try {
    // Update the post in the database
    const updatedPost = await prisma.post.update({
      // postId as the unique identifier of the updated post (URL parameter -> matches the parameter name in the route definition)
      where: { id: Number(postId) },
      data: { title, category, thought },
    });

    // Send the updated post as a response
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating post" });
  }
});
