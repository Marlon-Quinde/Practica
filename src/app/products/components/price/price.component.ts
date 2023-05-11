import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0


  ngOnDestroy(): void {
    console.log('Price component ngOnDestroy')
  }
  ngOnInit(): void {
    console.log('Price component ngOnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price component ngOnChanges')
    console.log({changes})
  }


 
}
