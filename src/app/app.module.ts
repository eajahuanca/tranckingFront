import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox';
import { jqxScrollBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscrollbar';

import { TrackingComponent } from './componentes/tracking/tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    jqxGridComponent,
    jqxListBoxComponent,
    jqxCheckBoxComponent,
    jqxScrollBarComponent,
    jqxDropDownListComponent,
    TrackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
