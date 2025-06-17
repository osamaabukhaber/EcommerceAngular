import { Component,Input,Output,EventEmitter, ChangeDetectorRef} from '@angular/core';
import { Store } from '../../Models/store';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from '../../directives/post-card';
import { ProductStatic } from '../../services/product-static';
import { RouterModule } from '@angular/router';
import { ProductsWithApi } from '../../services/products-with-api';
import { ChangeDetectionStrategy } from '@angular/compiler';


// import{post-card} from '@angular/directives/post-card';

@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule,ProductCardDirective,RouterModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {

  productDate!:Iproduct;
  productBought=new EventEmitter<Iproduct>();
// @Input() productDate!:Iproduct;
// @Output() productBought=new EventEmitter<Iproduct>();

  store:Store;
  clientName:string='';
  productList!:Iproduct[];
  toggleImg:boolean=true;
  isPurchased: boolean = false;
  totalOrderPrice:number=0;
  // filterByName:string='';



  constructor(private productsInServic:ProductStatic
    ,private productApi:ProductsWithApi,private cdr:ChangeDetectorRef) {

    this.store = new Store(
      "Amazon",
      ["Sohag", "Alex", "Cairo"],
      "https://m.media-amazon.com/images/I/61VuVU94RnL.__AC_SX300_SY300_QL70_ML2_.jpg"
    );
    this.clientName = "Amazon";

    // this.productList=productsInServic.getAllProducts();  // get data from service
    // this.productsAfterSearch=this.productList

    // this.productApi.getAllProducts().subscribe({
    //   next:(data)=>{
    //     console.log(data);

    //     this.productsAfterSearch=data;
    //   },complete() {

    //   },
    //   error:(err)=>{
    //     console.error("Error fetching products:", err);
    //   }

    // })




  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.productApi.getAllProducts().subscribe({
      next:(data:Iproduct[])=>{
        console.log(data);
        this.productList=data;
        this.productsAfterSearch=this.productList; // initialize with all products
        this.cdr.detectChanges(); // trigger change detection
      },
      error:(err:any)=>{
        console.error("Error fetching products:", err);
      }});

}

    getQuantityStatus(quantity:number): string {
      switch(quantity){
        case 0:return 'Out of Stock';
        case 1:return 'Last 1 Item';
        case 2:return 'Last 2 Items';
        default: return 'In Stock';
      }
    }

      toggle(){
      this.toggleImg=!this.toggleImg;
      }

      togglePurchase(i:number): void {
        // this.productList[i].isPurchased=!this.productList[i].isPurchased;  // show and hide image
        if(this.productList[i].quantity>=1){
          --this.productList[i].quantity;
        }
        else{

        }
      }

      //* search

      @Input() set filterByNameInChild(setValue:string){
        // console.log();
        // this.doSearch(setValue)
        // this.productsAfterSearch=this.doSearch(setValue)
        // this.productsAfterSearch=this.productsInServic.doSearch(setValue);
        //day 6
        this.productApi.getAllProducts().subscribe((data)=>{
          let arrOfData=data.filter((prd)=> {
            prd.name.toLowerCase().includes(setValue)
          })
          this.productsAfterSearch=arrOfData;
        })
      }
      productsAfterSearch:Iproduct[]=[]

      // doSearch(value:string):Iproduct[]{
      //   value=value.toLowerCase();
      //   return this.productList.filter((prd:Iproduct)=>prd.name.toLowerCase().includes(value));

      // }

      buyProduct(product:Iproduct){
        if(product.quantity>0) product.quantity--;



      }

      totalPrice(product:Iproduct,price:number,qtyValue:number){
        this.totalOrderPrice+= +qtyValue*price
      }


      @Output() prdProperty:EventEmitter<Iproduct>=new EventEmitter<Iproduct>()
      addToCartChild(prd:Iproduct){
        console.log("aad");
        console.log(prd);

        this.prdProperty.emit(prd)  //fire event

      }

      //day 4




      // togglePurchase(): void {
      //   console.log(i)
      //   // this.isPurchased = !this.isPurchased;
      //   this.productList[i].isPurchased=! this.isPurchased;
      // }
  }
