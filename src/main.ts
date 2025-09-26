import 'zone.js'; // 👈 Importar Zone.js antes de bootstrapApplication

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
