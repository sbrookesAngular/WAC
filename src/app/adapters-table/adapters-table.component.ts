import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { DataInterface }from '../DataInterface';
import { adapterRawData } from '../Data';

//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

declare var generalTabRenderer: any;

@Component({
  selector: 'app-adapters-table',
  templateUrl: './adapters-table.component.html',
  styleUrls: ['./adapters-table.component.css']
})

export class AdaptersTableComponent implements OnInit {

  faCoffee = faCoffee;
  faGear = faCog;
  faInfoCircle = faInfoCircle;
  faCircleArrowDown = faArrowCircleDown;
  faArrowRotateRight = faSync;
  faCircleCheck = faCheckCircle;
  faCircleQuestion = faQuestionCircle;

  adapters = [{id:0, name: 'Intel(R) Ethernet Server Adapter I350-F4', status: 'Enabled'}, {id:1, name: 'Intel(R) Ethernet Server Adapter I350-F4 #2', status: 'Enabled'}, {id:2, name: ' Intel(R) Ethernet Server Adapter I350-F4 #3', status: 'Enabled'}, {id:3, name: 'Intel(R) Ethernet Server Adapter I350-F4 #4', status: 'Disabled'}, {id:4, name: 'Intel(R) Ethernet Server Adapter I350-F4 #5', status: 'Down'}]

  adapter = '';

  //setting rawAdapterData equal to import { adapterRawData } from '../Data';
  rawAdapterData = adapterRawData;
  
  // rawAdapterData: DataInterface[] = ADAPTERDATA;

  //this "broadcasting" as a child to the components outside of it
  // @Output() messageEvent = new EventEmitter<string>();

  @Output() messageEvent = new EventEmitter();
  // @Output() messageEvent2 = new EventEmitter();
  //this "broadcasting" adapterData as a child to the components outside of it
  // @Output() this.rawAdapterData;

    //good single
  adapterSelector(x){

    this.adapter = x;
    this.messageEvent.emit(this.adapter); 
    console.log(this.rawAdapterData);

    //apply filter and broadcast

  }


  /*-- 
  adapterSelector(x) gets adapter.name => changes {{adapter}} in app.comonents.html
  and ties into general-tab.components.ts/.html
  --*/

  //this "broadcasting" this.adapter components outside of it
  //need to tie in adapterSelector() -> Data.ts/DataInterface.ts/general-tab.comonents
  // adapterSelector(x, y){
  //   // let selectedAdapter = this.rawAdapterData[y];
  //   this.adapter = x;
  //   this.messageEvent.emit(this.adapter); 
  //   this.messageEvent2.emit(this.rawAdapterData[y]); 
  //   // console.log(this.rawAdapterData[y]);

  // }




  constructor() { }

  ngOnInit(): void {
  }

}