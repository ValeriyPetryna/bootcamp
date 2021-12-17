const posts = [
  {
    author: "John Snow",
    title: "Natural language interface accessibility",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.",
    date: new Date(),
    likes: 1,
  },
  {
    author: "John Snow",
    title: "Accessibility of Remote Meetings",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.",
    date: new Date(),
    likes: 2,
  },
  {
    author: "John Snow",
    title: "Accessibility of Remote Meetings",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.",
    date: new Date(),
    likes: 2,
  },
  {
    author: "John Snow",
    title: "Accessibility of Remote Meetings",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.",
    date: new Date(),
    likes: 2,
  },
];

const getPosts = async (req, res, next) => {
  try {
    res.json(posts);
  } catch (error) {
    next(error);
  }
};

const createPost = async (req, res, next) => {
  try {
    console.log('Post created')
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getPosts,
  createPost
};
