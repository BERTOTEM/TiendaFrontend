import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductI } from 'src/app/models/product-i';
import { ProductService } from 'src/app/Service/product.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],

  providers: [MessageService],
})
export class EditComponent implements OnInit {

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
        this.toastr.success("Producto agregado al catalogo", "exito");
        console.log(data)
      },
      error: error => {
        console.log(error);
        this.toastr.error("error", "Error de Edicion");
        console.log(this.ProductEdit);
      }
    })
  }
}
