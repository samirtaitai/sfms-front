import { Injectable } from '@angular/core';

const applications = [
  { name: 'App1', description: 'Description for App1', flows: [{ code: "App1 flow", description: "this is app 1 flow" }] },
  { name: 'App2', description: 'Description for App2', flows: [{ code: "App2 flow", description: "this is app 2 flow" }] },
  { name: 'App3', description: 'Description for App3', flows: [{ code: "App3 flow", description: "this is app 3 flow" }, { code: "App3 flow 2", description: "this is app 3 flow second flow" }] }
];

@Injectable({
  providedIn: 'root'
})
export class Application {
  getapplications() {
    return [...applications];
  }

  createApplication(name: string, description: string, flows: any[]) {
    applications.push({ name, description, flows });
  }

}
