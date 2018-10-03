import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { ListitemComponent } from './components/listitem.component';


export interface itemList {
  id: number;
  brand: string;
  name: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'day10 Book Client';
  itemResult:string[];

  myItemList: itemList[];

  @Input()
  item: any;

  
  @Output()
  activate = new EventEmitter();

 
  propagateList(item: any) {
    console.log (">>> Items Found: ", item);     

    this.itemResult=Object.values(item);

    console.log(">> this.itemResult<< ", this.itemResult);

      this.activate.emit(this.itemResult);

    /*
    return new Promise(function(resolve, reject) {

      resolve(JSON.parse(this.itemResult));
    
    })
    */

    }

}
