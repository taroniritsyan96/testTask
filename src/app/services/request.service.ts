import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostsModel, UsersModel} from '../models/posts.model';

@Injectable({providedIn: 'root'})

export class RequestService {
  usersList!: UsersModel[];
  postsModels!: PostsModel[];

  constructor(private http: HttpClient) {

  }

  getUsers(): Promise<UsersModel[]> {
    return this.http.get<UsersModel[]>('https://nqguwnfemxegjoddzkjf.supabase.in/storage/v1/object/sign/users/usersList.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2Vycy91c2Vyc0xpc3QuanNvbiIsImlhdCI6MTY0MjYyMDM1NiwiZXhwIjoxOTU3OTgwMzU2fQ.D-l0fXn7k-5l8ZnIgdnArnnu8yKKOX3fa73XCsk5rNg')
      .toPromise();
  }

  getPosts(): Promise<PostsModel[]> {
    return this.http.get<PostsModel[]>('https://nqguwnfemxegjoddzkjf.supabase.in/storage/v1/object/sign/users/postsList.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2Vycy9wb3N0c0xpc3QuanNvbiIsImlhdCI6MTY0MjYzMDc1NCwiZXhwIjoxOTU3OTkwNzU0fQ.EcKcmbvHjJjLvNFhSM2ngc0OrYWxvFqGgNoK_FcxMP4')
      .toPromise();
  }

  getBothData(): any {
    this.getPosts()
      .then((posts) => {
        this.postsModels = posts;
      });

    return this.getUsers()
      .then((users: UsersModel[]) => {
        users.forEach((user, index) => {
          if (user.id === this.postsModels[index].id) {
            user.posts = this.postsModels[index].posts;
          }
        });

        return this.usersList = users;
      });
  }
}
