import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  public getProducts()
  {
    let   products!:Product[];
   products=[
    new Product(1,'Memory Card',500),
    new Product(2,'Pend Drive',600),
    new Product(3,'Power Bank',700)
   ]
  
   return products;
  }
  
  public getProduct(id:any)
  {
    let product:Product[]=this.getProducts();
     return product.find(p=>p.productID==id)
  }
}


export class Product
{
constructor(productID:number,name:string,price:number)
{
  this.productID=productID;
  this.name=name;
  this.price=price;

}
productID:number;
name:string;
price:number;
}