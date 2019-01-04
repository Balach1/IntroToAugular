import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component ({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    // tslint:disable-next-line:no-inferrable-types
    @Input() rating: number;
    starWidth: number;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    OnClick() {
        this.notify.emit('clicked!');
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}
