import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) {

  }

  getTasks(): Observable<task[]> {
    return this.http.get<task[]>(this.apiUrl)
  }
}
