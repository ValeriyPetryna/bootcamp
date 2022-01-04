const { Post } = require("../db/models/blog");

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({}).sort({ date: -1 }).exec();

    res.send(posts);
  } catch (error) {
    next(error);
  }
};

const getSinglePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id).exec();

    if (post) {
      res.send(post);
    } else {
      res.status(404).send("Post by selected id not found");
    }
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    const post = req.body;
    if (post) {
      const doesPostExists = await Post.exists({ title: post.title });
      if (!doesPostExists) {
        const newPost = await Post.create(post);
        res.status(201).json(newPost);
      } else {
        res.status(404).send("Post already exists");
      }
    }
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (id) {
      const doesPostExists = await Post.exists({ _id: id });

      if (doesPostExists) {
        const post = req.body;
        const updatedPost = await Post.findOneAndUpdate({}, post, {
          new: true,
        });

        res.send(updatedPost);
      } else {
        res.status(404).send("Post by selected id does not exists");
      }
    }
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const id = req.params.id;
    const removed = await Post.findByIdAndRemove(id);

    if (!removed) {
      res.status(500).send("Cannot find or delete document");
    }
    res.status(200).send(removed);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
