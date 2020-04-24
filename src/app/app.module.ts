import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskFormComponent } from './task-manager/task-form/task-form.component';
import { TaskListComponent } from './task-manager/task-list/task-list.component';
import { TaskDetailComponent } from './task-manager/task-detail/task-detail.component';
import { TaskItemComponent } from './task-manager/task-list/task-item/task-item.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
