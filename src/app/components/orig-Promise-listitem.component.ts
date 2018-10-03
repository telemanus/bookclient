import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, } from '@angular/material';


export interface BookData{
  id: number;
  title: string;
  firstname: string;
  lastname: string;
  activate: string;
}

const initData:BookData[] = [{id:1, title:"LOADING... ... ", firstname:"", lastname: "", activate: ""}];


@Component({
    selector: 'app-listitem',
    templateUrl: './listitem.component.html',
    styleUrls: ['./listitem.component.css']
  })

export class ListitemComponent implements OnInit {

  displayCols = ['id', 'title', 'firstname', 'lastname'];
  datasource = new MatTableDataSource(initData) ;

  @Input()
  //passResult : BookData[];
  passResult : any;
  itemResult : string[];


@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  
  constructor() {
   }

  ngOnInit() {

    
     setTimeout(()=>{
     var promise1 = Promise.resolve(this.passResult);


   promise1.then((datasource)=> {
    // Move on to next middle ware
    console.log("BookData data>>>>>>>", this.passResult);
    console.log("MatTableDatasource data>>>>>>>", this.datasource);

    this.datasource.data = this.passResult;
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;

    console.log("Datasource.DATA>>>>>>>", this.datasource.data);

 // return this.datasource;
     })
     },5000); //5 seconds allow me to submit search before datasource.data returns nothing?!
    
  }
      
  applyFilter(filterValue: string) {
      this.datasource.filter = filterValue.trim().toLowerCase();
      if (this.datasource.paginator) {
        this.datasource.paginator.firstPage();
      }
  }

  ngAfterViewInit() {

  }


}