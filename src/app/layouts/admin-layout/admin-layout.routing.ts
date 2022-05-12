import { Routes } from '@angular/router';
import { AllPetsDeviceComponent } from "app/pages/AllPetsDevice/AllPetsDeviceComponent";
import { HistoryComponent } from 'app/pages/history/history.component';
import { PetsDeviceListComponent } from 'app/pages/PetsDeviceList/PetsDeviceList.component';
import { ReportComponent } from 'app/pages/Report/Report.component';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'list',          component: PetsDeviceListComponent},
    { path: 'all',     component: AllPetsDeviceComponent },
    { path: 'history',          component: HistoryComponent },
    { path: 'report',           component: ReportComponent },
  
];
