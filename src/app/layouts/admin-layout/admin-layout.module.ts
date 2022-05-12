import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';

import { PetsDeviceListComponent }           from '../../pages/PetsDeviceList/PetsDeviceList.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllPetsDeviceComponent } from "app/pages/AllPetsDevice/AllPetsDeviceComponent";
import { HistoryComponent } from 'app/pages/history/history.component';
import { ReportComponent } from 'app/pages/Report/Report.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    PetsDeviceListComponent,
    AllPetsDeviceComponent,
    HistoryComponent,
    ReportComponent
 
  ]
})

export class AdminLayoutModule {}
