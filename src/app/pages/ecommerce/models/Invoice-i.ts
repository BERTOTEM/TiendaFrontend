export  interface InvoiceI {
  id:string;
  idtype:string;
  date:Date;
  clientId:string;
  clientName:string;
  account:string;
  products:productsI[];
}
export  interface productsI{
  product:string;
  cantidad:string;
  name:string;
  price:number
}

