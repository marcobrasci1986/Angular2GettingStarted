import {Component} from "@angular/core";
import {ProductService} from "./products/product.service";

@Component({
    moduleId: module.id,
    selector: 'pm-app',
    templateUrl:'app.html',
    providers: [ProductService]

})
export class AppComponent {
    pageTitle:string = 'Acme Product Management';
}

