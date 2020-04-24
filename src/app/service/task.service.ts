import { Injectable } from '@angular/core';
import { Headers , RequestOptions } from '@angular/http';
import { Task } from '../Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  server:string = 'http://localhost:8000/';
  headers: Headers = new Headers();
  options: any;
  constructor(private http:HttpClient) {
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('content-Type','application/json');
    this.headers.append('X-Requested-With','XMLHttpRequest');

    this.options = new RequestOptions({headers:this.headers});
  }

  addTask(title):Observable<Task>
  {
    const newTask = new Task(title);
    return this.http.post<Task>(this.server+'add',newTask);
  }
}
