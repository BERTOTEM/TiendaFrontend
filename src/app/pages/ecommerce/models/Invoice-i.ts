export  interface InvoiceI {
  id:string;
  idtype:string;
  date:string;
  clientId:string;
  clientName:string;
  products:productsI[];
}
export  interface productsI{
  product:string;
  cantidad:string;
  name:string;
  price:number
}


