# Using Angular Route Parameters

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code

```javascript
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
```
