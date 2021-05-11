/*
 * Copyright (c) Markus Schmidgall 2021
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
