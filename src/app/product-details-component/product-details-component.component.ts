import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../module/Product';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-details-component',
  standalone: true,
  imports: [NgIf , FormsModule ,CommonModule],
  templateUrl: './product-details-component.component.html',
  styleUrl: './product-details-component.component.css'
})
export class ProductDetailsComponentComponent {

  @Input() product!: Product;
  @Output() buy =new EventEmitter();
  showDescription = false;

purchase() {
  console.log("bdtrtbtr")
return this.buy.emit(this.product);
}
getImageURL() {
  return "assets/images/"+this.product?.url_image;
}
toggleDescription() {
  this.showDescription = !this.showDescription;
}


}
