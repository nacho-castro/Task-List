import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: task[] = TASKS;
  faTimes = faTimes;

  constructor(){}

  ngOnInit(): void {
  
}
}
