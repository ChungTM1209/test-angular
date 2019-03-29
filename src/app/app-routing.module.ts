import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReadingListComponent} from './reading-list/reading-list.component';
import {ReadListComponent} from './read-list/read-list.component';

const routes: Routes = [{
    path: 'list',
    component: ReadingListComponent
}, {
    path: 'read',
    component: ReadListComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
