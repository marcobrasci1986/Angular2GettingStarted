import {Component, OnChanges, Input, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})
export class StartComponent implements OnChanges {

    /**
     * input decorator
     * <ai-star [rating]="product.starRating"></ai-star>
     */
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges():void {
        this.starWidth = this.rating * 86 / 5;
        console.log('starWidth: ' + this.starWidth);
    }

    onClick():void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}