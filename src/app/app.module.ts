import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogWebModule } from './blog-web/blog-web.module';
import { BlogAdminModule } from './blog-admin/blog-admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogWebModule,
    BlogAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
