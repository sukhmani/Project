import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { create } from './create';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent  {
  id = [1];
 
  type = '';
  version = '';

  memory = '';
 
  
constructor(private httpClient: HttpClient){}
mod = new create(2, 'name', 'type', 'version','memory')




get diagnostic() { return JSON.stringify(this.mod); }

create() {
  
  this.httpClient.post('http://localhost:3000/create-button', this.mod)
  .subscribe( response => {
    console.log(response);
  });
}

}
