import { Component } from '@angular/core';
import {Task} from '../task';
import {Tasks as TasksService} from '../tasks';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {DatePipe} from '@angular/common';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'app-archive',
  imports: [
    MatIcon,
    MatCardHeader,
    MatCardSubtitle,
    DatePipe,
    MatCardActions,
    MatCard,
    MatCardTitle,
    MatIconButton
  ],
  templateUrl: './archive.html',
  styleUrl: './archive.css',
})
export class Archive {
  public tasks: Task[] = [];

  constructor(
    private tasksService: TasksService
  ) {
  }

  ngOnInit() {
    this.tasksService.index(true).subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  delete(task: Task) {
    if (!confirm('Are you sure?')) {
      return;
    }

    this.tasksService.delete(task).subscribe(() => {
      this.ngOnInit();
    });
  }
}
