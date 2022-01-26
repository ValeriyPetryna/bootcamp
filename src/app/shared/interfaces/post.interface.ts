export interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  likes?: Array<any>;
  createdAt?: Date;

  tags: Array<Tag>;
  comments?: Array<Comment>;
}

export interface Tag {
  name: string;
}

export interface Comment {
  _id: string;
  content: string;
  userId: {
    username: string;
  };
}