import { Injectable } from '@angular/core';

import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';
import { CartItem } from '../models/cartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {
   addToCart(product:Product){

    let item=CartItems.find(c=>c.product.id ===product.id);
     console.log(item)
    if(item){
     item.quantity+=1;
    }
    else{
      let cartItem=new CartItem();
      cartItem.product=product;
      cartItem.quantity=1;
      CartItems.push(cartItem);

    }

  }

  list():CartItem[]{
    return CartItems;
  }
  removeFromCart(product:Product)
  {
    let item=CartItems.find(c=>c.product.id ===product.id);
      console.log(item)
      console.log(CartItems)
    CartItems.splice(CartItems.indexOf(item),1);
    console.log(CartItems)

  }
}
