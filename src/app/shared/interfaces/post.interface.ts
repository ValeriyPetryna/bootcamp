export interface Post {
  id?: String;
  title: String;
  content: String;
  author: String;
  likes?: Array<String>;
  createdAt?: Date
}
