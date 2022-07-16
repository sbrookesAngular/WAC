import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { AdaptersTableComponent } from '../adapters-table/adapters-table.component';


import { DataInterface }from '../DataInterface';
import { ADAPTERDATA3 } from '../Data3';

//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

@Component({
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.css']
})

export class GeneralTabComponent implements OnInit {

  /* -- Font Awesome START -- */
  faCoffee = faCoffee;
  faGear = faCog;
  faInfoCircle = faInfoCircle;
  faCircleArrowDown = faArrowCircleDown;
  faArrowRotateRight = faSync;
  faCircleCheck = faCheckCircle;
  faCircleQuestion = faQuestionCircle;
  faPlusCircle = faPlusCircle;
  /* -- Font Awesome END -- */

  /* -- adapter data  START -- */

  //for associated {{adapter}} in general-tab.compent.html imput from adapterSelector(x)
  // in adapters-table.ts

  //this is recieving the broadcast of this.adapter from adapters-table component
  //deprecated
  @Input() adapter: string; 

  //pulls in adapter information 
  adapterData: DataInterface[] = ADAPTERDATA3;

  /* -- adapter data model/controller END -- */

  constructor() { }

  ngOnInit(): void {
  }

}