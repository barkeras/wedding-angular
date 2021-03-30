import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sliderPage: boolean = false;

  constructor(private router: Router) { 

    router.events.subscribe((val) => {
      // see also 
      const isNavEnd = val instanceof NavigationEnd;
      if(isNavEnd) {
        const route = val['url'];
        if (route === '/') {
          this.sliderPage = true;
        } else {
          this.sliderPage = false;
        }
      }
  });

  }

  ngOnInit(): void {
  }

}
