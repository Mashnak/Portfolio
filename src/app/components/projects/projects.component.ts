/*
 * Copyright (c) Markus Schmidgall 2021
 */

import {Component, OnInit} from '@angular/core';
import {Repository} from '../../interfaces/Repository';
import {REPOSITORIES} from '../../mock-data/mock-repositories';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repositories: Repository[] = REPOSITORIES;

  constructor() {
  }

  ngOnInit(): void {

  }

}
