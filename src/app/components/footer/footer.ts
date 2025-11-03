import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `<p>Versión: {{ version }}</p>`,
  styleUrl: './footer.css'
})
export class Footer {
  version = environment.appVersion;
}
