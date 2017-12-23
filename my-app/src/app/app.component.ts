import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router) {
    route.queryParams.subscribe(p => {
      if(p.redirect) {
        router.navigate([`/${p.redirect}`]);
      }
    })
  }
  title = 'app';
}
