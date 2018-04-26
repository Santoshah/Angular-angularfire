import { Component } from '@angular/core';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html'
})



export class ProductsComponent {

	products= ['A Tree', 'A book'];

	productName = "A Book";
	isDisabled = true;
	constructor() {
		setTimeout(()=>{
			this.isDisabled = false;
		},3000)
	}

	addProduct() {
		this.products.push(this.productName);
	}
}