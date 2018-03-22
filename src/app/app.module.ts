import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { registerComponent } from './register/register.component';
import { loginComponent } from './register/login.component';
import { homeComponent } from './home/home.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { booksComponent } from './books/books.component';
import { teachersComponent } from './teachers/teachers.component';
import { myAccountComponent } from './my-account/my-account.component';
import { StudentService } from './services/students.service';
import { TeacherService } from './services/teachers.service';
import { SchoolService } from './services/schools.service';
import { ClassService } from './classes/classes.service';
import { SubjectService } from './books/subjects/subjects.service';
import { BookService } from './books/books.service';
import { appRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    headerComponent,
    footerComponent,
    booksComponent,
    teachersComponent,
    myAccountComponent,
    registerComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule
  ],
  providers: [
    StudentService,
    TeacherService,
    SchoolService,
    ClassService,
    BookService,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
