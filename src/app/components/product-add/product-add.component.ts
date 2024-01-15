import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      //  productId:["",Validators.required],
      productName: ['', Validators.required],
      unitPrice: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      categoryId: ['', Validators.required],
    });
  }

  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);

      this.productService.add(productModel).subscribe(
        (response) => {
          console.log(response);
          this.toastrService.success(response.productName, 'Başarılı');
         },
         (reponseError) => {
        //   console.log(reponseError.error.Errors);
          if (reponseError.error.Errors.length > 0) {
            for (let i = 0; i < reponseError.error.Errors.length; i++) {
              this.toastrService.error(
                reponseError.error.Errors[i].ErrorMessage,
                 'Doğrulama Hatası'
              );
           }
          }
        //   console.log(reponseError);
           this.toastrService.error(reponseError.error)
        })
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
