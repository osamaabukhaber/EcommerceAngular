import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';
import { ProductsWithApi } from '../../services/products-with-api';

@Component({
  selector: 'app-insert-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './insert-product.html',
  styleUrls: ['./insert-product.css']
})
export class InsertProduct {
  productForm: FormGroup;
  categories: any[] = [];

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductsWithApi,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [null, Validators.required],
      quantity: [null, Validators.required],
      img: ['', Validators.required],
      category: ['', Validators.required],
      productDetails: ['', Validators.required]
    });
    this.categoryService.getCategories().subscribe(data => this.categories = data);
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: () => this.router.navigate(['/products'])
      });
    }
  }
}
