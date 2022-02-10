export interface Address {
  state: string;
  city: string;
}

export interface Product {
  product_name: string;
  brand_name: string;
  price: number;
  address: Address;
  discription: string;
  date: Date;
  time: Date;
  image: string;
}
