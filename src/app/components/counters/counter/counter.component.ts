import { Component} from '@angular/core'

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {
    title: string = 'Counter';
    base:number = 5;
    count = 0;

    acumulator(value:number) {
        this.count+=value;
        this.count=(this.count<0) ? 0 : this.count;
    }
    
}