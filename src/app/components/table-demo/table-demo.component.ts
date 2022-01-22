import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css']
})
export class TableDemoComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  tableData:any=['First','Last','handler'];
  tableRawData:any = [];

 add(){
   const name:any = prompt('please enter your name');
  this.tableRawData.push(name);
 }
 edit(){

 }

 delete(){
 this.tableRawData.pop();
 }

}
