import { Component, OnInit } from '@angular/core';
import { inventoryComputer } from '../inventory';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryComputer = {
    id: 1,
    name:'A'
};

  constructor() { }

  ngOnInit(): void {
  }

}
