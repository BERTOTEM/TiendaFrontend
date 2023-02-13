import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductI } from 'src/app/pages/producto/models/product-i';
import { ProductService } from 'src/app/pages/producto//Service/product.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']

})
export class EditComponent {
  @Input() ProductEdit: ProductI = {
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

  EditProduct() {
    this.services.editProduc(this.ProductEdit).subscribe({
      next: data => {
        if(this.ProductEdit.img.length >20 &&this.ProductEdit.name.length > 3 && this.ProductEdit.min <this.ProductEdit.max && this.ProductEdit.inInventory >0){
        this.toastr.success("Producto Editado", "exito");
        console.log(data)
        setTimeout(() => {
          window.location.reload();
          }, 1000);
          }
        if(this.ProductEdit.img.length <=20){
          this.toastr.info("Uri de imagen muy corta!", "Info");
        }
        if(this.ProductEdit.name.length <=3){
          this.toastr.info("Nombre muy corto!", "Info");
        }
        if(this.ProductEdit.min >= this.ProductEdit.max){
          this.toastr.info("El min tiene un valor mayor o igual al max!", "Info");
        }
        if(this.ProductEdit.inInventory==0){
          this.toastr.info("El invenario es 0!", "Info");
        }
      },
      error: error => {
        console.log(error);
        this.toastr.error("error", "Error de Edicion");
        console.log(this.ProductEdit);
      }
    })
  }

}
