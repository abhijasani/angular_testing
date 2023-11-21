import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './component/post/post.component';


const routes: Routes = [
  { path: 'detail', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PostComponent],
  exports: [RouterModule],
})
export class AppRoutingModule { }
