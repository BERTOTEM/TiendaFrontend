
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductI } from 'src/app/pages/producto/models/product-i';
import { ProductService } from 'src/app/pages/producto//Service/product.service';


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

        if(this.ProductCrear.img.length >20 &&this.ProductCrear.name.length > 3 && this.ProductCrear.min <this.ProductCrear.max && this.ProductCrear.inInventory >0){

            this.services.createProduct(this.ProductCrear).subscribe({
              next: data => {
                this.toastr.success("Producto agregado al catalogo", "exito");

              },
              error: error => {
                console.log(error);
                this.toastr.error("error", "Error de Creacion");
                console.log(this.ProductCrear);
              }
            })
            setTimeout(() => {
              window.location.reload();
              }, 1000);
        }if(this.ProductCrear.img.length <=20){
          this.toastr.info("Uri de imagen muy corta!", "Info");
        }
        if(this.ProductCrear.name.length <=3){
          this.toastr.info("Nombre muy corto!", "Info");
        }
        if(this.ProductCrear.min >= this.ProductCrear.max){
          this.toastr.info("El min tiene un valor mayor o igual al max!", "Info");
        }
        if(this.ProductCrear.inInventory==0){
          this.toastr.info("El invenario es 0!", "Info");
        }





  }

}
