import * as repo from "../repository/comment.repo.js";
import * as postRepo from "../repository/post.repo.js";

const getAllComments = (id = '') => repo.findAll(id);

const getOneComment = (id) => repo.findOne(id);

const updateComment = (id, comment) => repo.updateOne(id, comment);

const removeComment = (id) => repo.deleteOne(id);

const setComment = async (postId, content, userId) => {
  await postRepo.findOne(postId); // check if post exists

  if (content) {
    const newComment = await repo.createOne({ postId, content, userId });
    const commentId = newComment._id;

    const saved = await postRepo.commentToggle({ postId, commentId, toggle: true });
    if (!saved) {
      return "Cannot save comment";
    }
    return saved;
  }
};

const unsetComment = async (commentId) => {
  const comment = await repo.findOne(commentId);
  if (!comment) {
    throw new Error("Cannot find comment by selected id");
  }
  const postId = comment.postId;
  const post = await postRepo.findOne(postId);

  if (!post) {
    throw new Error("Cannot find post by selected id");
  }

  const deleteComment = await repo.deleteOne(commentId);
  const removeFromPost = await postRepo.commentToggle({ postId, commentId, toggle: false });

  if (!removeFromPost || !deleteComment) {
    return "Cannot remove comment from post";
  }

  return removeFromPost;
};

export {
  getAllComments,
  getOneComment,
  updateComment,
  removeComment,
  setComment,
  unsetComment,
};
