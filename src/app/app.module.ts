import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralTabComponent } from './general-tab/general-tab.component';
import { AdaptersTableComponent } from './adapters-table/adapters-table.component';


//https://fontawesome.com/versions#packages
// https://www.npmjs.com/package/@fortawesome/angular-fontawesome
//https://stackoverflow.com/questions/68792617/font-awesome-icons-are-not-showing-even-though-package-is-installed-on-angular
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdapterSettingsComponent } from './adapter-settings/adapter-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralTabComponent,
    AdaptersTableComponent,
    AdapterSettingsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }