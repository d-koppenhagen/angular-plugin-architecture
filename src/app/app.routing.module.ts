import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'settings',
        component: ConfigurationComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }