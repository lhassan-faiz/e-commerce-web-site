import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './module/Product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl = 'your_api_url'; // Replace with your actual API URL
  selectedProduct: any ;
  getImageURL(product : Product):string{
    return "assets/images/"+product.url_image;
  }
  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }


  buy(product: Product) {
    console.log("hhhhhhhhhhhhhhhhh");
    if (product.quantity > 0) {
      product.quantity--; // Décrémenter la quantité
      if (product.quantity < 5) {
        alert("Quantité restante inférieure à 5 !"); // Alerte lorsque la quantité est inférieure à 5
      }
    } else {
      alert("Produit épuisé !");
     }
    }

  


}
