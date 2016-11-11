import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {ProductListComponent} from "./products/product-list.component";


/**
 * Main Entry point of the application:
 * BrowserModule -> *ngIf, $ngFor
 * FormsModule -> [(ngModel)]
 *
 * imports: external Angular Modules
 * declarations: add custom components
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ProductListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
