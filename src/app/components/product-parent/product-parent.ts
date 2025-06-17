import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from "../product/product";
import { Iproduct } from '../../Models/iproduct';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter-pipe';

@Component({
  selector: 'app-product-parent',
  imports: [CommonModule, FormsModule, Product,CreditCardFormatterPipe],
  templateUrl: './product-parent.html',
  styleUrl: './product-parent.css'
})
export class ProductParent {
  filterByNameInParent:string='';  // non null assertion
  creditCard='4444555566667777';

  productsInParent:Iproduct[]=[];
  addToCartInParent(prd:Iproduct){
    // console.log("parent",prd);
    console.log(this.productsInParent);

    // let arr = this.productsInParent.push(prd);
    let obj=this.productsInParent.find((prdInObg)=>prdInObg.id===prd.id)
    if(obj){
      obj.quantity++
      // console.log(obj.quantity++);
    }else{
      this.productsInParent.push({...prd,quantity:1})
    }
  }

  deleteProduct(index:number){
  // this.productsInParent.pop();
  this.productsInParent.splice(index,1);
}


// pipe Date
currentDate:Date = new Date();

fixedDate:Date =new Date('2/6/2025');


}




