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
import { AdapterSettingsComponent } from './adapter-settings/adapter-settings.component';

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

    if(dynamicAsideDisplayState == "none"){

      //open dynamicAsideContent
      _("dynamicAside").style.display = "block";
      _("dynamicBody").setAttribute("class", "col-6 col-md-7 col-lg-7");

      if(x == 'settings'){

        //placeholder for now
        // _('dynamicAsideRoot').innerHTML = `<h4><b>Adapter Settings</b></h4>
        // <fa-icon class="" [icon]="faPlusCircle" style="color:blue;"></fa-icon>
        // <p>&lt;app-adapter-settings&gt; component goes here</p>`;

        _('dynamicAsideRoot').innerHTML = `
        <div class="row">

          <div class="col-12 col-md-12 col-lg-12">

              <div class="row mt-3">

                  <div class="col-6 col-md-6 col-lg-6">

                      <select class="form-select" aria-label="Default select example">

                          <option selected>Select</option>
                          <option value="dirCchAcc">Direct Cache Access</option>
                          <option value="dmaCoalescing">DMA Coalescing</option>
                          <option value="flowControl">Flow Control</option>
                          <option value="imp">Interrupt Moderation Rate</option>
                          <option value="ipv4">IPv4 Checksum Offload</option>
                          <option value="jumboPckt">Jumbo Packet</option>
                          <option value="lso4">Large Send Offload V2 (IPv4)</option>
                          <option value="lso6">Large Send Offload V2 (IPv6)</option>
                          <option value="locAdmnAddr">Locally Administered Address</option>
                          <option value="logLnkState">Log Link State</option>
                          <option value="lwLtIntPrts">Low Latency Interrupt Ports</option>
                          <option value="lwLtInts">Low Latency Interrupts</option>
                          <option value="mxNmRssPrcs">Maximum Number of RSS Processors</option>
                          <option value="mxNmRssQs">Maximum Number of RSS Queus</option>
              
                      </select>
              
                  </div>
              
                  <div class="col-6 col-md-6 col-lg-6">
              
                      <select class="form-select" aria-label="Default select example">
                          
                          <option selected>Select</option>
                          <option value="enabled">Enabled</option>
                          <option value="disabled">Disabled</option>
              
                      </select>

                      <p>
                          Device Default<br>
                          <b>Enabled</b>
                      </p>

                      <p>
                          Profile Value<br>
                          <b>Disbaled</b>
                      </p>
                      
                  </div>

              </div>

              <div class="col-12 col-md-12 col-lg-12 p-2 test">

                  <div class="helpBckClr mt-3">
          
                      This tab displays detailed info about the currently selected adapter.
                      <br>
                      <br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          
                  </div>

                  <div class="mt-3 text-center">

                    <button type="button" class="btn btn-light btnBorder">Discard Changes</button>
                    <button type="button" class="btn btn-primary">Apply Changes</button>

                  </div>

              </div>

          </div>

      </div>

        `;

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