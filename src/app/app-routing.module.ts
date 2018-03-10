import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { homeComponent } from "./home/home.component";
import { booksComponent } from "./books/books.component";
import { teachersComponent } from "./teachers/teachers.component";
import { myAccountComponent } from "./my-account/my-account.component";
import { registerComponent } from './register/register.component';
import { loginComponent } from './register/login.component';

const appRoutes: Routes = [
    { path: '', component: homeComponent},
    { path: 'books', component: booksComponent},
    { path: 'teachers', component: teachersComponent},
    { path: 'my-account', component: myAccountComponent},
    { path: 'register', component: registerComponent},
    { path: 'login', component: loginComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class appRoutingModule{

}