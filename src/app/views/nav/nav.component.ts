import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title = 'TV MAZE API';
  showName: string;

  constructor(private router: Router) { }

  ngOnInit() {}


  onSubmit(): void {
    this.router.navigateByUrl('shows/' + this.showName);
  }

}
