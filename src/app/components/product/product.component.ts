import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Product } from 'src/app/models/product';
import { ProductDto } from 'src/app/models/productDto';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[]=[];
  dataLoaded=false;
  filterText="";
  
  constructor(private productService: ProductService,private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,  private cartService:CartService) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"])
      {
        this.getProductsByCategory(params["categoryId"])
      }
      else
      {
        this.getProducts()
      }
    })

  }

  getProducts() {
    console.log("Api request başladı.");
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
      this.dataLoaded=true
      // console.log(response); 
      //  console.log(this.products); 
      // console.log("Api request bitti.");     
    });
    // console.log("Metod bitti.");
  }
   
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe((data) => {
      this.products = data;   
      this.dataLoaded=true   
      console.log(data);     
    });
 
  }
 
//   addToCart(product:Product)
//   {
//     if(product.productId===1)
//     {
//       this.toastrService.error("Hata","Bu ürn sepete eklenemedi")
//     }
//     else{
//     this.toastrService.success("Ürün Sepete Eklendi",product.name)
//   }
// console.log(product);
//   }

  addToCart(product: Product) {
    if (product.id === 1) {
      this.toastrService.error(
        'Hatalı ürün sepete eklendi',
        product.productName
      );
    } else
      this.toastrService.success('ürün sepete eklendi', product.productName);
      this.cartService.addToCart(product);
  }
}
