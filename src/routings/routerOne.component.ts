import { Component } from '@angular/core';

import { MyService } from '../services/my.service';

@Component({
  selector: 'app-router-one',
  templateUrl: '../routings/routerOne.component.html'
})
export class RouterOneComponent {
  title = 'Router One Page';
  arrPaths: string [];

  constructor(private myService: MyService) {
    this.myService.getPaths().subscribe(data => {
      this.arrPaths = data;
      console.log(data);
    });
  }

}
