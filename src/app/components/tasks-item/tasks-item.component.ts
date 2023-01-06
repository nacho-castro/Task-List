import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task: task = TASKS[0]
  @Output() onDeleteTask: EventEmitter<task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<task> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {

  }

  onDelete(task: task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task:task){
    this.onToggleReminder.emit(task);
  }
}

