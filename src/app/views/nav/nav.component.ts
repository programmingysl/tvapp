import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'TV MAZE API'; // toolbar title
  showName: string; // var to hold the value of the input textbox

  constructor(private router: Router) { }
 // Dependency Injection of var router type Router to allow us to load the shows component using navigatebyurl method + paramater passing showName
  ngOnInit() {}

// take input from the html and bind to this url and send me to the shows pages shows/input variable which has a valid route in the app.routing module.ts under the routes array
  onSubmit(): void {
    this.router.navigateByUrl('shows/' + this.showName);
  }

}
