const repo = require("../repository/like.repo");
const postRepo = require("../repository/post.repo");

const getAllLikes = () => repo.findAll();

const getOneLike = (id) => repo.findOne(id);

const setLike = async (body) => {
  // todo: set original userId
  let userId = "61d2e0c79af09b82be999df0";
  const { postId } = body;

  const like = {
    postId,
    userId,
  };

  // todo: use transaction
  const newLike = await repo.createOne(like);
  const pushLike = await postRepo.addLike(postId, newLike._id);

  if (!pushLike) {
    return null;
  }

  return newLike;
};

// todo: remove like from post
const removeLike = (id) => repo.deleteOne(id);

module.exports = {
  getAllLikes,
  getOneLike,
  setLike,
  removeLike,
};
