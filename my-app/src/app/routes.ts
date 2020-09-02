import { Routes } from '@angular/router';
import { EditJobComponent } from './edit-job/edit-job.component';
import { AppComponent } from './app.component';
import { SearchComponent } from '../app/search/search.component';

export const appRoutes: Routes = [
    {
        path: 'search', component: SearchComponent,
        //children: [{ path: '', component: SignupComponent }]
    },

    {
        path: 'edit-job', component: EditJobComponent,
        //children: [{ path: '', component: SignupComponent }]
    },
    
];

