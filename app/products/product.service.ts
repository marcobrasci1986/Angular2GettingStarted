import {Injectable} from "@angular/core";
import {IProduct} from "./product";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ProductService {

    /**
     * Todo change with real API
     * @type {string}
     * @private
     */
    private _productUrl = 'api/products/products.json';

    constructor(private _http:Http) {
    }

    getProducts():Observable<IProduct[]> {
        return this._http
            .get(this._productUrl)
            .map((response:Response) => <IProduct> response.json())
            .do(data => console.log('Data' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error:Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }


}