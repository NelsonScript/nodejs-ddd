import * as express from "express";

abstract class CommonRoutesConfig {
  api: express.Application;
  name: string;
  prefix: string;

  constructor(api: express.Application, name: string, prefix: string) {
    this.api = api;
    this.name = name;
    this.prefix = prefix;
    this.configureRoutes();
  }
  getName() {
    return this.name;
  }
  abstract configureRoutes(): express.Application;
}

export { CommonRoutesConfig };
