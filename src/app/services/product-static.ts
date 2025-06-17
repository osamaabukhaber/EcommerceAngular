import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'   //to share this service across the application
})
export class ProductStatic {

productsInService!: Iproduct[];

  constructor() {
    // this.productsInService =
    //   [{
    //   Id: 1,
    //   name: 'Apple iPhone 16 Pro Max',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&width=240',
    //   quantity: 0,
    //   price: 200,
    //   category: 1,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id: 2,
    //   name: 'Apple iPhone 16 Plus 256GB',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N70106126V/45/_/1725964812/921f66a4-9984-4a86-8903-beb4dc1aeed7.jpg?width=800',
    //   quantity: 20,
    //   price: 200,
    //   category: 2,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id: 3,
    //   name: 'Apple iPhone 13',
    //   img:
    //     'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&width=240',
    //   quantity: 0,
    //   price: 200,
    //   category: 1,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id: 4,
    //   name: 'Apple iPhone 16 128GB ',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N70106132V/45/_/1725965692/cf70424d-3e18-465b-8527-53f835bac1c6.jpg?width=800',
    //   quantity: 1,
    //   price: 200,
    //   category: 2,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id: 5,
    //   name: 'Apple iPad Air 2025 (11th Generation) ',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N70159246V/45/_/1741283675/01d8270b-080f-41bf-bbb3-9491df9c7000.jpg?width=800',
    //   quantity: 20,
    //   price: 200,
    //   category: 2,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id: 6,
    //   name: 'Apple iPad 2025 (11th Generation)',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N70159225V/45/_/1741283671/d98fa047-2fef-46b5-986c-017a40ce356c.jpg?width=800',
    //   quantity: 20,
    //   price: 200,
    //   category: 2,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id:7,
    //   name: 'Apple iPad 2025 (11th Generation)',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N70159513V/45/_/1741283607/acc7c8b3-cdad-4cc9-a8f5-27fed13bd5dc.jpg?width=800',
    //   quantity: 8,
    //   price: 200,
    //   category: 3,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id: 8,
    //   name: 'Apple iPad 2025 (11th Generation)',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N70159514V/45/_/1741283765/920f1818-6d78-4e5a-a246-54e2ecbec26c.jpg?width=800',
    //   quantity: 4,
    //   price: 200,
    //   category: 1,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,
    // },
    // {
    //   Id:9,
    //   name: 'Apple iPad Air 2025 (7th Generation)',
    //   img:
    //     'https://f.nooncdn.com/p/pnsku/N70159249V/45/_/1741283731/f2fad3e0-fa0c-4031-90c5-aa900702901e.jpg?width=800',
    //   quantity: 5,
    //   price: 200,
    //   category: 1,
    //   productDetails:
    //     'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //     isPurchased:false,


    //   },]


   }

  getAllProducts():Iproduct[] {
    return this.productsInService;
  }

  getProductById(id:number):Iproduct|undefined{
    return this.productsInService.find((prdInList) => prdInList.id === id) || undefined;
  }

  doSearch(value:string):Iproduct[]{
  value=value.toLowerCase();
  return this.productsInService.filter((prd:Iproduct)=>prd.name.toLowerCase().includes(value));

}

getAllIds():number[]{
return this.productsInService.map((prd:Iproduct)=>prd.id);
}


}
