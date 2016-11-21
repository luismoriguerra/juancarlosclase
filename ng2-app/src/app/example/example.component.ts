import { Component, OnInit } from '@angular/core';
import {ExampleService} from "./example.service";


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  providers: [ExampleService]
})
export class ExampleComponent implements OnInit {

  localproducts: any;

  constructor(private exampleService : ExampleService) { }

  ngOnInit() {
    this.localproducts = this.exampleService.getProducts();
    
  }

}