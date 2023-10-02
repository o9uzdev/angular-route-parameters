import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productId?: string;

  // You can use it either in the constructor or in ngOnInit

  constructor(private activatedRoute: ActivatedRoute) {
    // if you want to use it with snapshot
    if (activatedRoute.snapshot.paramMap.has('id')) {
      this.productId = activatedRoute.snapshot.paramMap.get('id');
    }
    // if you want to use it without snapshot
    activatedRoute.paramMap.subscribe({
      next: params => {
        this.productId = params.get('id')
      }
    })
  }

  ngOnInit(): void {
    // if you want to use it with snapshot
    if (this.activatedRoute.snapshot.paramMap.has('id')) {
      this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    }
    // if you want to use it without snapshot
    this.activatedRoute.paramMap.subscribe({
      next: params => {
        this.productId = params.get('id')
      }
    })
  }
}
