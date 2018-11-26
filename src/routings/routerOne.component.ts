import { Component } from '@angular/core';

import { MyService } from '../services/my.service';

@Component({
  selector: 'app-router-one',
  templateUrl: '../routings/routerOne.component.html'
})
export class RouterOneComponent {
  title = 'Router One Page';
  arrPaths: string [];
  public name: string = "Venkanna";
  public submitText: string = 'Not submitted yet.';
  constructor(private myService: MyService) {
    this.myService.getPaths().subscribe(data => {
      this.arrPaths = data;
      console.log(data);
    });
  }
  submit() {
    this.submitText = 'Submitted successfully!';
  }

}
