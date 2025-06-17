import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { StoreComp } from "./components/store-comp/store-comp";
// import { Product } from "./components/product/product";
// import { CommonModule } from '@angular/common';
// import { ProductParent } from './components/product-parent/product-parent';
// import { Navbar } from './components/navbar/navbar';
// import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EcommerceApp';
}
