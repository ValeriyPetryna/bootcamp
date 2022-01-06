const repo = require("../repository/comment.repo");
const postRepo = require("../repository/post.repo");

const getAllComments = () => repo.findAll();

const getOneComment = (id) => repo.findOne(id);

const createComment = async (body) => {
  // todo: add check that post exists for this comment

  const { content, postId } = body;
  const comment = { content, post: postId };

  const newComment = await repo.createOne(comment);
  const pushComment = await postRepo.addComment(postId, newComment._id);

  if (!pushComment) {
    return null;
  }

  return newComment;
};

const updateComment = (id, comment) => repo.updateOne(id, comment);

const removeComment = (id) => repo.deleteOne(id);

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  updateComment,
  removeComment,
};
