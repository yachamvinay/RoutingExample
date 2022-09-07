import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  product:any ;
  sub: any;
  id:any;
  constructor(private _Activatedroute:ActivatedRoute,private _route:Router,private _productService :ProductService) { }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params=>
      {

        this.id=params.get("id");
        let product:Product[]=this._productService.getProducts();
        this.product= product.find(p=>p.productID==this.id)
      })

  }
onBack()
{
  this._route.navigate(['dashboard/product']);
}

}
