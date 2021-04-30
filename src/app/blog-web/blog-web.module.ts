import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

const routes: Routes = [
  {
      path     : 'blogs',
      component: HomeComponent,
      children: [
        {path: 'index', component: BlogListComponent},
        {path: ':single_blog', component: SingleBlogComponent},
      ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    BlogListComponent,
    SingleBlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class BlogWebModule { }
