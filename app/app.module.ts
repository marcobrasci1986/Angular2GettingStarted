import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {ProductListComponent} from "./products/product-list.component";
import {ProductFilterPipe} from "./products/product-filter.pipe";
import {StartComponent} from "./shared/star.component";
import {HttpModule} from "@angular/http";
import {ProductDetailComponent} from "./products/product-detail.component";
import {WelcomeComponent} from "./home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./products/pruduct-guard.service";


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
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'products', component: ProductListComponent},
            {path: 'product/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent},
            {path: 'welcome', component: WelcomeComponent},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'} // wildcard
        ])

    ],
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductFilterPipe,
        StartComponent,
        ProductDetailComponent,
        WelcomeComponent
    ],
    providers: [ProductDetailGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
