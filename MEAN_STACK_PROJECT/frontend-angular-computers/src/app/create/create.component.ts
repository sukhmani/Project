import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { create } from './create';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {

  type = ['A', 'B',
  'C', 'D'];

  Version = ['1', '2',
  '3', '4'];

  Memory = ['1', '2',
  '3', '4'];
  
constructor(private httpClient: HttpClient){}
mod = new create(9, 'new computer', this.type[0], 'lkj','');

submitted = false;

onSubmit() { this.submitted = true; }


get diagnostic() { return JSON.stringify(this.mod); }

create() {
  //this.mod = new create(42, '', '','','');
  this.httpClient.post('http://localhost:3000/create-button', this.mod)
  .subscribe( response => {
    console.log(response);
  });
}

}
