import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulrCalc';

  constructor(private apiService: ApiService){}


  ngOnInit(){
    this.apiService.getContacts().subscribe((res)=>{
      console.log('This was called!!')
      console.log(res);      
    });
  }


}
