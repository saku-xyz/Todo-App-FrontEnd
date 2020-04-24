import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  title:String;
  constructor(private ts:TaskService) { }

  ngOnInit() {
  }

  Add(e)
  {
    e.preventDefault();
    this.ts.addTask(this.title).subscribe((data)=>{
      console.log("task added : "+data.id);
    });
  }

}
