import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatalogComponentComponent} from "./catalog-component/catalog-component.component"
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CatalogComponentComponent,NgIf]
})


export class AppComponent {
  title = 'tp4product';
  selectedCategory: string | null =null ;
  promotionsOnly: false | undefined ;
  updateSelectedCategory(category: string | null): void {
    this.selectedCategory = category;
  }
  togglePromotionsFilter(): void {
    this.promotionsOnly = this.promotionsOnly;
  }
  
}

