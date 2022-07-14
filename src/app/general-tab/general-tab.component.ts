import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { AdaptersTableComponent } from '../adapters-table/adapters-table.component';


import { DataInterface }from '../DataInterface';
import { adapterRawData } from '../Data';
import { ADAPTERDATA2 } from '../Data2';

//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

@Component({
  selector: 'app-general-tab',
  templateUrl: './general-tab.component.html',
  styleUrls: ['./general-tab.component.css']
})

export class GeneralTabComponent {

  /* -- Font Awesome START -- */
  faCoffee = faCoffee;
  faGear = faCog;
  faInfoCircle = faInfoCircle;
  faCircleArrowDown = faArrowCircleDown;
  faArrowRotateRight = faSync;
  faCircleCheck = faCheckCircle;
  faCircleQuestion = faQuestionCircle;
  /* -- Font Awesome END -- */

  /* -- for HELP SECTION expand/collapse (old school JS)  START -- */
  helpExpanded = false;

  expandHelp(){

    //document.getElementById() && 
    //document.getElementByClassName() shorteners
    // in scr/assets/js/global.js
    new _();
    new _c();

    this.helpExpanded = true;

    //help info mock-up help expander
    //mobile-responsive
    let tabContainersState = _("expTabCols").getAttribute("class");
    let helpContainerState = _("expHelpCol").getAttribute("class");
    let helpContent = _('expHelpContent');


    if(helpContainerState == "col-3 col-md-3 col-lg-3 ht_16"){
      //open help

      _("expTabCols").setAttribute("class", "col-5 col-md-7 col-lg-7");
      _("expHelpCol").setAttribute("class", "col-7 col-md-5 col-lg-5 ht_16");
      _('expHelpContent').style.display = "block";

    }else{
      //close help

      _("expTabCols").setAttribute("class", "col-9 col-md-9 col-lg-9");
      _("expHelpCol").setAttribute("class", "col-3 col-md-3 col-lg-3 ht_16");
      _('expHelpContent').style.display = "none";

    }

  }
  /* -- for HELP SECTION expand/collapse (old school JS)  END -- */

  /* -- adapter data model/controller START -- */

  //for associated {{adapter}} in general-tab.compent.html imput from adapterSelector(x)
  // in adapters-table.ts

  //this is recieving the broadcast of this.adapter from adapters-table component
  @Input() adapter: string;

  //pulls in adapter information 
  //need to tie in adapterSelector() <--> Data.ts/DataInterface.ts/general-tab.comonents
  adapterData: DataInterface[] = ADAPTERDATA2;
  // dapterData: DataInterface[] = adapterRawData;


  /* -- adapter data model/controller END -- */

  constructor() { }

  ngOnInit(): void {
  }

}