/*
 * Copyright (c) Markus Schmidgall 2021
 * Portfolio Projekt um Angular von Grund auf zu lernen
 */

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
