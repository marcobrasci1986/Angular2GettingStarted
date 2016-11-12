import {PipeTransform, Pipe} from "@angular/core";
import {IProduct} from "./product";


@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

    transform(productList:IProduct[], filterBy:string):IProduct[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        return filterBy ? productList.filter(
            (product:IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : productList;
    }
}