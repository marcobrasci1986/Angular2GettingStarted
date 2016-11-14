import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./products/pruduct-guard.service";
import {ProductModule} from "./products/product.module";


/**
 * Main Entry point of the application:
 * BrowserModule -> *ngIf, $ngFor
 * FormsModule -> [(ngModel)]
 * HttpModule -> $http service
 *
 * imports: external Angular Modules
 * declarations: add custom components, directive and pipe
 */
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wildcard
        ]),
        // feature modules
        ProductModule

    ],
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    providers: [ProductDetailGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
