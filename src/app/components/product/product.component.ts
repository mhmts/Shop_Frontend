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
  //   product1={productId:1,name:'Bardak',url:'aaaa',price:5,description:'bbbb'}
  //   product2={productId:2,name:'Bilgisayar',url:'aaaa',price:10,description:'ccbbbb'}
  //  product3={productId:3,name:'Elma',url:'aaaa',price:15,description:'aabbbb'}
  //  product4={productId:4,name:'Kamera',url:'aaaa',price:5,description:'aabbbb'}

  // products=[this.product1,this.product2,this.product3,this.product4]
  //   products:Product[]=[
  //    this.product1,
  //   this.product2,
  //    this.product3,
  //  this.product4,
  //  ];

  //  productResponseModel:ProductResponseModel={
  //   data:this.products
  // message:"",
  //  success:true
  //};

  // apiUrl="https://jsonplaceholder.typicode.com/todos"

  products: Product[] = [];
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
      console.log(this.products); 
      console.log("Api request bitti.");     
    });
    console.log("Metod bitti.");
  }
   
  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe((response) => {
      this.products = response;   
      this.dataLoaded=true       
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
    if (product.productId === 1) {
      this.toastrService.error(
        'Hatalı ürün sepete eklendi',
        product.name
      );
    } else
      this.toastrService.success('ürün sepete eklendi', product.name);
      this.cartService.addToCart(product);
  }
}
