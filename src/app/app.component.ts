import { Component, Input, Output, EventEmitter } from '@angular/core';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import { NavbarComponent} from './navbar/navbar.component';
import { AdaptersTableComponent } from './adapters-table/adapters-table.component';

//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'WAC';
  faCoffee = faCoffee;
  faCog = faCog;
  faInfoCircle = faInfoCircle;
  faCircleArrowDown = faArrowCircleDown;
  faSync = faSync;
  faCheckCircle = faCheckCircle;
  faQuestionCircle = faQuestionCircle;
  faPlusCircle = faPlusCircle;
  faWindowClose = faWindowClose;

  /* -- dynamic help container START -- */
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
  /* -- dynamic help container END -- */

  /* -- dynamic dynamicBody & dynamicAside START -- */
  expandDynamicAside(x){

    //this force-closes the dynamic aside, ie: jumping from "Settings"  to  "Create team"
    //if user fails to close aside manually
    this.closeDynamicAside();
    
    let dynamicBodyState = _("dynamicBody").getAttribute("class");
    let dynamicAsideState = _("dynamicAside").getAttribute("class");
    let dynamicAsideDisplayState = _("dynamicAside").style.display;
    
    console.log(x);

    if(dynamicAsideDisplayState == "none"){

      //open dynamicAsideContent
      _("dynamicAside").style.display = "block";
      _("dynamicBody").setAttribute("class", "col-6 col-md-7 col-lg-7");

      if(x == 'settings'){

        //placeholder for now
        _('dynamicAsideRoot').innerHTML = `<h4><b>Adapter Settings</b></h4>
        <fa-icon class="" [icon]="faPlusCircle" style="color:blue;"></fa-icon>
        <p>&lt;app-adapter-settings&gt; component goes here</p>`;

      }else if(x == 'createTeam'){

        let dynamicAsideContent = _('dynamicAsideRoot');
        
        //placeholder for now
        _('dynamicAsideRoot').innerHTML = `<h4><b>New Team Wizard</b></h4>
        <fa-icon class="" [icon]="faPlusCircle" style="color:blue;"></fa-icon>
        <p>&lt;app-create-team&gt; component goes here</p>`;

      }


    }else{
      //closes dynamicAside

      _("dynamicBody").setAttribute("class", "col-12 col-md-12 col-lg-12");
      _("dynamicAside").style.display = "none";
      
    }

  }

  closeDynamicAside(){

    _("dynamicBody").setAttribute("class", "col-12 col-md-12 col-lg-12");
    _("dynamicAside").style.display = "none";

  }

  /* -- dynamic dynamicBody & dynamicAside END -- */

  adapter = '';
  rawAdapterData = '';

  recAdapterSelected($event){

    this.adapter = $event;
    // console.log("app.component: " + this.adapter);
    
  }
  
}