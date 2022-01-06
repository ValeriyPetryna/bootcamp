export interface Post {
  _id: string;
  title: string;
  content: string;
  author: string;
  likes?: Array<string>;
  createdAt?: Date;
  tags: [
    {
      tag: string;
    }
  ];
}
