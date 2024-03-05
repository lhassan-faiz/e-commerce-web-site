import { Component, Input } from '@angular/core';
import { Product } from '../module/Product';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';
import { ProductDetailsComponentComponent } from "../product-details-component/product-details-component.component";
import { ServicesService } from '../services.service';
@Component({
    selector: 'app-catalog-component',
    standalone: true,
    templateUrl: './catalog-component.component.html',
    styleUrl: './catalog-component.component.css',
    imports: [NgForOf, FormsModule, ProductDetailsComponentComponent, NgIf]
})
export class CatalogComponentComponent {
  products : Product[]=[
    new Product(1, 'iphone 11', "c1.jpg" , '660', 'Conçu pour élargir vos horizons, l iPhone 11 d Apple vous séduira en un rien de temps. Arborant des matériaux de haute qualité, il vous en mettra plein les yeux grâce à son magnifique écran Liquid Retina HD de 6.1 pouces à résolution 828 x 1792 pixels. Écran Liquid Retina HD de 6,1 pouces (diagonale) de 1 792 x 828 pixels à 326 ppp Stockage: 128Go Puce: A13 Bionic CPU 6 cœurs avec 2 cœurs de performance et 4 cœurs à haute efficacité énergétique GPU 4 cœurs Neural Engine 8 cœurs Résistant à la poussière et à l’eau (jusqu’à 2 mètres pendant 30 minutes maximum, IP68)  Double appareil photo avec ultra grand-angle et grand-angle 12 Mpx ; mode Nuit, mode Portrait et vidéo 4K jusqu’à 60 i/s Caméra avant TrueDepth 12 Mpx avec mode Portrait, vidéo 4K et ralenti Face ID pour l’authentification sécurisée et Apple Pay Contenu du coffret: iPhone, Câble Lightning vers USB ',5, '70%','Smartphone'),
    new Product(2, 'dell laptop ', "c2.jpg", '440','Dell latitude 7400 Tactile i5-8365U 16Go 256Go SSD 14 , Dell Intel® Core™ i5-8365U Mémoire 16 Go, DDR4, 256 Go Disque SSD M.2 PCIe NVMe 14″ Full HD  (1920 x 1080) tactile Intel UHD Graphics 620 Windows 10 Pro 64 Bit' ,2, '20%', 'Laptop'),
    new Product(3, 'hp laptop g4  ', "c3.jpg", '430','Hp Elitebook 840 G5 Core i5-8350U 8Go 256 Go SSD CPU : Intel Core i5-8350U RAM : 8 Go DDR4 Stockage : 256 Go SSD M.2 Écran : 14″ Mat IPS Full-HD GPU : Intel  HD Graphics 620 Wi-Fi + Bluetooth + Webcam HD OS : Windows 10 Pro 64 bits', 8, '', 'Laptop'),
    new Product(4 , 'Apple watch Series 8 ', "c4.jpg" ,'600','L Apple Watch Series 8 est la neuvième itération de la montre d Apple. Elle reprend le même écran de 41 mm (ou 45 mm) introduit par l Apple Watch Series 7, un nouveau SiP Apple S8 et un nouveau capteur de température. Elle introduit également une nouvelle fonctionnalité de détection de cycle d ovulation et de détection des accidents.',12,'30%','Watches'),
    new Product(4 , 'samsung watche series 6 ', "c6.jpeg" ,'400','Contrairement à la Galaxy Watch 6 « Classic », cette version n’est pas équipée de bague rotative. Samsung a ici concentré ses efforts dans la réduction des bordures noires autour de l’écran. Ainsi, on passe d’une diagonale de 1,2 pouce à 1,3 pouce pour la version 40 mm, avec un gabarit quasi identique.Le constat est le même pour la version 44 mm dont l’écran passe de 1,4 à 1,47 mm. Des bordures sont certes affinées, mais loin d’être invisibles. La montre profite ainsi d’un design plus agréable à l’œil..',12,'30%','Watches'),
    new Product(4 , 'samsung s23 ultra ', 'c5.jpeg' ,'999','',13, '', 'Smartphone'),
  ]; 
  @Input() selectedCategory: string | null = null;
  @Input() promotionsOnly: any;

  constructor (private b :ServicesService){}
  getAvailableProducts(): Product[] {
    return this.products.filter((product) => product.quantity > 0);
  }
  buy(product: Product) {
     this.b.buy(product);
     }
     getFilteredProducts(): any[] {
      let filteredProducts = this.products;

    if (this.selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.categorie === this.selectedCategory);
    }

    if (this.promotionsOnly) {
      filteredProducts = filteredProducts.filter(product => product.promotion!== null && product.promotion !== '');
    }

    return filteredProducts;
  }
  togglePromotionsFilter(): void {
    this.promotionsOnly = !this.promotionsOnly;
  }
        
    

}
