/*
 * Copyright (c) Markus Schmidgall 2021
 * Portfolio Projekt um Angular von Grund auf zu lernen
 */

/**
 * The interface for the repositories from github that are shown on the project pages
 */
export interface Repository {
  id?: number;
  name: string;
  description: string;
  url: string;
}
