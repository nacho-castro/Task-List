import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: task[] = TASKS;

  constructor(){}

  ngOnInit(): void {
  
}
}
