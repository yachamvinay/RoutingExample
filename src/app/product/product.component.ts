import { Component, OnInit } from '@angular/core';
 
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  prodcuts!:Product[];
  displayedColumns: string[] = ['ProductID', 'name', 'price' ];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

  this.prodcuts=this.productService.getProducts();

  }

}