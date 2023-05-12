import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0

  public interval$?: Subscription;
  ngOnDestroy(): void {
    console.log('Conmponente Hijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }
  ngOnInit(): void {
    console.log('Conmponente Hijo: ngOnInit');

    this.interval$ = interval(1000).subscribe( value => console.log('Tick', value ))


  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Conmponente Hijo: ngOnChanges');
    console.log({changes});
  }


 
}
