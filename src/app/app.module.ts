import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {RequestService} from './services/request.service';
import {UsersModel} from './models/posts.model';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./users/users.module')
    .then(m => m.UsersModule)
}];

export function initializeApp(requestService: RequestService): () => Promise<UsersModel[]> {
  return () => requestService.getBothData();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UsersModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [
    { provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [RequestService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
