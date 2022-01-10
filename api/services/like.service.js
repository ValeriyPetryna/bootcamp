const repo = require("../repository/like.repo");
const postRepo = require("../repository/post.repo");

const getAllLikes = () => repo.findAll();

const getOneLike = (id) => repo.findOne(id);

const likeToggle = async (postId, userId) => {
  const post = await postRepo.findOne(postId);
  const isLiked = post.likes.filter((el) => el.userId.toString() === userId);
  const toggle = isLiked.length;

  const likeOptions = {
    postId,
    userId,
    toggle,
  };

  const likeId = await getLikeId(isLiked, likeOptions);

  const result = await postRepo.likeToggle({ ...likeOptions, likeId });

  return result;
};

const removeOne = (id) => repo.deleteOne(id);

const getLikeId = async (exists, likeOptions) => {
  let likeId;

  if (!likeOptions.toggle) {
    const newLike = await repo.createOne(likeOptions);
    likeId = newLike._id;
  } else {
    likeId = exists[0]["_id"];
    await repo.deleteOne(likeId);
  }

  return likeId;
};

module.exports = {
  getAllLikes,
  getOneLike,
  likeToggle,
  removeOne,
};
