import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductI } from 'src/app/models/product-i';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  ProductCrear: ProductI = {
    id:"",
    name:"",
    inInventory:0,
    enabled:true,
    min:0,
    max:0,
    img:"",
    state:true,
    price:0,
  };

  constructor(
    private modalService: NgbModal,

    private services: ProductService,
    private toastr: ToastrService,
    private route: Router,

  ) { }
  ngOnInit(): void {
  }
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  CrearProduct() {
    this.services.createProduct(this.ProductCrear).subscribe({
      next: data => {
        this.toastr.success("exito", "exito");
        console.log(data)
      },
      error: error => {
        console.log(error);
        this.toastr.error("error", "Error de Edicion");
        console.log(this.ProductCrear);
      }


    })


  }
}
