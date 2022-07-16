import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

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


  //this "broadcasting" as a child to the components outside of it
  @Output() messageEvent = new EventEmitter();
  
  adapter = '';

  //good single
  adapterSelector(x){

    this.adapter = x;
    this.messageEvent.emit(this.adapter); 

  }
  constructor() { }

  ngOnInit(): void {
  }

}