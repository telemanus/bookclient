import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})

/*
export interface Book {
  id: number;
  title: string;
  fname: string;
  lname: string;
}
*/

export class ListitemComponent implements OnInit {

  displayCols = ['id', 'title', 'firstname', 'lastname'];

  bookresult = new MatTableDataSource();


  @Input()
  //filmResult : string[]; 
  passResult : string[];
  //passResult : new MatTableDataSource();
  itemResult : string[];
  
  constructor() {
   }

  ngOnInit() {


  }

    @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.bookresult.data = this.passResult;
    console.log("bookresult data>>>>>>>", this.passResult);
    this.bookresult.sort = this.sort;
  }

  refreshData(itemList: any) {
    console.log (">>> Display items Found: ", itemList);     

    this.itemResult=Object.values(itemList);

    console.log(">> this.itemResult<< ", this.itemResult);

  //  return this.filmResult;
    }

}
