export interface UsersModel {
  id: number;
  age: number;
  name: string;
  posts?: string[];
}

export interface PostsModel {
  id: number;
  posts: string[];
}
