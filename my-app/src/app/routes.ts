import { Routes } from '@angular/router';
import { EditJobComponent } from './edit-job/edit-job.component';

export const appRoutes: Routes = [
 
    {
        path: 'edit-job', component: EditJobComponent,
        //children: [{ path: '', component: SignupComponent }]
    },
];

