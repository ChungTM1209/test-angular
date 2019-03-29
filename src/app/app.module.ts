import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReadingListComponent} from './reading-list/reading-list.component';
import {ReadListComponent} from './read-list/read-list.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BookComponent } from './book/book.component';

@NgModule({
    declarations: [
        AppComponent,
        ReadingListComponent,
        ReadListComponent,
        BookComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
