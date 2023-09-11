import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuck-app';

  ngOnInit() {
    console.log("Le composant home vient d'être changer");
  }


}
