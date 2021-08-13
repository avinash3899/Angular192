import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'Login', component: LoginComponent},
  {path:'Register', component: RegisterComponent},
  {path:'Feedback', component: FeedbackComponent},
  {path:'Contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
