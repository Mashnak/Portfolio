/*
 * Copyright (c) Markus Schmidgall 2021
 * Portfolio Projekt um Angular von Grund auf zu lernen
 */

import {Component, OnInit, Input} from '@angular/core';
import {Repository} from '../../interfaces/Repository';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  @Input() repository!: Repository;

  constructor() {
  }

  ngOnInit(): void {
  }

}
