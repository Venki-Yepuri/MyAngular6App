import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class MyService {
  constructor(private httpService: HttpClient) {
    this.getPaths().subscribe(data => {
      console.log(data);
    });
  }

  public getPaths(): Observable<any> {
    return this.httpService.get('./assets/paths.json');
  }
}
