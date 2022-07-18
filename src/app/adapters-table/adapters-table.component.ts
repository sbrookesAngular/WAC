import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { ADAPTERDATA22 } from '../Data22';

//document.getElementById() shortener in scr/assets/js/global.js
declare var _: any;

//document.getElementByClassName() shortener in scr/assets/js/global.js
declare var _c: any;

declare var generalTabRenderer: any;

// declare var adapterData:[];

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
  adapterData = ADAPTERDATA22;
  
  //https://www.tamasoft.co.jp/en/general-info/unicode.html    ❔ ❓  ⛔
  adapterSelector(x){

    this.adapter = x;
    // this.messageEvent.emit(this.adapter); 

    console.log(_("generalTabRoot").innerHTML);
    console.log(this.adapterData);

    // _("generalTabRoot").innerHTML = this.adapterData[x].adapterName;

    _("generalTabRoot").innerHTML = `     
    
    <h3>${this.adapterData[x].adapterName}</h3>

    <div class="row">
  
        <nav>
    
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
  
            <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">General</button>
  
            <button class="nav-link" id="nav-diagnostics-tab" data-bs-toggle="tab" data-bs-target="#nav-diagnostics" type="button" role="tab" aria-controls="nav-diagnostics" aria-selected="false">Diagnostics</button>
  
            <button class="nav-link" id="nav-teaming-tab" data-bs-toggle="tab" data-bs-target="#nav-teaming" type="button" role="tab" aria-controls="nav-teaming" aria-selected="false">Teaming</button>
  
            <button class="nav-link" id="nav-vlans-tab" data-bs-toggle="tab" data-bs-target="#nav-vlans" type="button" role="tab" aria-controls="nav-vlans" aria-selected="false">VLANs</button>
  
          </div>
  
        </nav>
  
        <div class="tab-content" id="nav-tabContent">
  
          <!-- TAB START -->
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
  
            <div id="expTabCols" class="col-12 col-md-12 col-lg-12">
      
              <div class="row">
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    Bus Type<br>
                    <b>${this.adapterData[x].busType}</b>
  
                  </div> 
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
              
                    Driver Name<br>
                    <b>${this.adapterData[x].driverName}</b>
              
                  </div> 
  
                  <div class="ht_8  col-12 col-md-3 col-lg-2">
              
                    Driver Version<br>
                    <b>${this.adapterData[x].driverVer}</b>
              
                  </div> 
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    ETrackID<br>
                    <b>${this.adapterData[x].eTrackID}</b>
                
                  </div> 
          
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    Location<br>
                    <b>${this.adapterData[x].location}</b>
                
                  </div>  
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                  Media Type<br>
                    <b>${this.adapterData[x].medType}</b>
                
                  </div>  
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    Negotiated Link Speed<br>
                    <b>${this.adapterData[x].negLinkSpd}</b>
                
                  </div>  
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    Negotiated Link Width<br>
                    <b>${this.adapterData[x].negLinkWdth}</b>
                
                  </div>  
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    Part Number<br>
                    <b>${this.adapterData[x].prtNum}</b>
                
                  </div>  
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    Permanent Ethernet Address<br>
                    <b>${this.adapterData[x].permEthAdd}</b>
                
                  </div>  
  
                  <div class="ht_8 col-12 col-md-3 col-lg-2">
                
                    Port<br>
                    <b>${this.adapterData[x].port}</b>
                
                  </div>
  
                </div>
                <!-- row closer -->
                
              </div>
              <!-- <div id="expTabCols" class="col-9 col-md-9 col-lg-9"> closer -->
  
              <div id="expHelpCol" class="col-12 col-md-12 col-lg-12 ht_8 mb-3">

                <div class="cursorPointer" onclick="accordion(this)"  >

                  <img class="navIcons" src="assets/images/rndQ.png" alt="rnd?">
                  <b>More Info</b>
                  <br>
                  <br>

                </div>
   
                <div id="expHelpContent" class="accordionPanel" style="display: none;">

                  ${this.adapterData[x].helpInfo}

                </div>
                         
              </div>
              <!-- class="col-3 col-md-3 col-lg-3 ht_16"> closer -->
  
          </div>
          <!-- TAB END -->
  
          <!-- TAB START -->
          <div class="tab-pane fade" id="nav-diagnostics" role="tabpanel" aria-labelledby="nav-diagnostics-tab">
            
            Diagnostics Content...
            <br>
            <br>       
            <br>
            <br>      
            <br>
            <br>      
          </div>
          <!-- TAB END -->        
  
          <!-- TAB START -->
          <div class="tab-pane fade" id="nav-teaming" role="tabpanel" aria-labelledby="nav-teaming-tab">
   
            <div class="cursorPointer" (click)="expandDynamicAside('createTeam')" onclick="accordion(this)">

              <img class="navIcons" src="assets/images/plusIcon.png" alt="rnd?">
              <b>Create Team</b>
              <br>
              <br>

            </div>

            <div class="accordionPanel" style="display: none;">
  
              Create Team Content
              <br>
              <br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              
            </div>       
            <br>       
            <br>
            <br>      
            <br>
            <br>   
              
          </div> 
          <!-- TAB END -->
  
          <!-- TAB START -->
          <div class="tab-pane fade" id="nav-vlans" role="tabpanel" aria-labelledby="nav-vlans-tab">
            
            VLANs Content...
            <br>
            <br>       
            <br>
            <br>      
            <br>
            <br>   
          
          </div>
          <!-- TAB END -->

        </div>
        <!-- <div row closer -->
      `
  ;

  }

  
  constructor() { }

  ngOnInit(): void {
  }

}