interface IPostUser {
  userName: string;
  email: string;
}
export interface IPost {
  _id: any;
  title: string;
  description: string;
  category: string;
  price: string;
  address: string;
  image: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  user: IPostUser;
}

export interface IInitialState {
  page: number;
  posts: IPost[];
  categoryPosts: IPost[];
  myPosts: IPost[];
}
