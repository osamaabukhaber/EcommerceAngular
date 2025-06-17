import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { Iproduct } from '../../Models/iproduct';
import { ProductStatic } from '../../services/product-static';
import { Subscription } from 'rxjs';
import { ProductsWithApi } from '../../services/products-with-api';

@Component({
  selector: 'app-product-details-component',
  imports: [RouterModule],
  templateUrl: './product-details-component.html',
  styleUrl: './product-details-component.css',
})
export class ProductDetailsComponent implements OnInit,OnDestroy {
  currentId: number=0;
  myIndex: number=0 ;
  product: Iproduct | undefined;
  allIds: number[] = [];
  sub!:Subscription;
  constructor(
    private active: ActivatedRoute,
    // private productService: ProductStatic,
    private route: Router,
    private productApi: ProductsWithApi,
    private cdr:ChangeDetectorRef
  ) {
    // this.currentId = Number(active.snapshot.paramMap.get('id'));

    //day 6
    // this.allIds = productService.getAllIds();


    // prevFunc(){
    //   if(this.myIndex > 0){
    //     this.myIndex--;
    //     this.route.navigate(['/product-details',this.allIds[this.myIndex]]);
    //   }else{
    //     this.route.navigate(['/product-details',this.allIds[0]]);
    //   }
    // }

    this.productApi.getAllIds().subscribe((data)=>{
        console.log("prrr",data);
        this.allIds=data.map((id)=>Number(id));
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.sub= this.active.paramMap.subscribe((data)=>{
      this.currentId=Number(data.get('id'))
      this.productApi.getProductByID(this.currentId).subscribe((data) => {
    // send id to method
    if (data) {
      this.product = data;
      this.cdr.detectChanges(); // to update the view with the new product data

    } else {
      this.route.navigate(['**']);
    }
    })
  })
    // console.log(this.currentId);



    // console.log(this.allIds);
    // console.log('current ID', this.currentId);
    // console.log('index', this.myIndex);
    // console.log('myIndex', this.allIds.indexOf(this.currentId));
  }


//   ngOnInit(): void {
//   this.sub = this.active.paramMap.subscribe((data) => {
//     this.currentId = Number(data.get('id'));
//     this.productApi.getProductByID(this.currentId).subscribe({
//       next: (prd) => {
//         this.product = prd;
//         this.cdr.detectChanges();
//       },
//       error: () => {
//         this.route.navigate(['**']);
//       }
//     });
//   });
// }



  prevFunc() {
    this.myIndex = this.allIds.indexOf(this.currentId);
    if (this.myIndex > 0) {
      this.route.navigate(['products', this.allIds[--this.myIndex]]);
    }
    else {

    }
  }

  nextFunc() {
    this.myIndex = this.allIds.indexOf(this.currentId);
    if (this.myIndex < this.allIds.length - 1) {
      this.route.navigate(['/products', this.allIds[++this.myIndex]]);
    }
  }


}
