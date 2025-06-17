import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApi {

  constructor(private http: HttpClient) {}

  getAllProducts():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${environment.baseUrl}/products`)
  }
  getProductByID(prd:number):Observable<Iproduct>{
    return this.http.get<Iproduct>(`${environment.baseUrl}/products/${prd}`);
  }

  search(value:string):Observable<Iproduct[]>{
    // return this.http.get<Iproduct[]>(`http://localhost:3000/products?name=${value}`);
       return this.http.get<Iproduct[]>(`${environment.baseUrl}/products/${value}`)
      // return this.http.get<Iproduct[]>(`http://localhost:3000/products?name_like=${value}`)
  }
  // getProductByID(pID: number): Observable<Iproduct> {
  //   return this.http.get<Iproduct>(`${'http://localhost:3000/products'}/${pID}`);
  // }
  getAllIds():Observable<number[]> {
return this.getAllProducts().pipe(map((prd)=> prd.map((p) => p.id)));
}
addProduct(product: Iproduct): Observable<Iproduct> {
    return this.http.post<Iproduct>(`${environment.baseUrl}/products`, product);
  }
}
