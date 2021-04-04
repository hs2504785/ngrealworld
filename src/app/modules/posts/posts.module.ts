import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './containers/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [PostListComponent, PostComponent],
  imports: [CommonModule, PostsRoutingModule, HttpClientModule],
  providers: [PostService],
})
export class PostsModule {}
