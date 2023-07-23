import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'fileUploads',component:FileUploadsComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'service',component:ServiceComponent
  },
  {
    path:'aboutus',component:AboutUsComponent
  },
  {
    path:'signUp',component:SignupComponent
  },
  {
    path:'signIn',component:SigninComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileUploadsComponent,
    ContactComponent,
    ServiceComponent,
    AboutUsComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
