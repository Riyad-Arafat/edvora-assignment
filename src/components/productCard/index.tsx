import React from "react";
import { Product } from "../../types/product";
import {
  BrandName,
  Card,
  Footer,
  Header,
  Price,
  ProductName,
  RightSideHeader,
  Image,
  Location,
  Td,
  DateSpan,
  Discription,
} from "./style";

export const ProductCard = ({ product }: { product: Product }) => {
  const { date: time } = product;
  const NewDate = new Date(time);
  const date =
    NewDate.getDate() + "-" + NewDate.getMonth() + "-" + NewDate.getFullYear();
  return (
    <Card>
      <Header>
        <div>
          <Image
            src={product.image}
            alt={product.product_name}
            width={70}
            height={70}
          />
        </div>
        <RightSideHeader>
          <ProductName>{product.product_name}</ProductName>
          <BrandName>{product.brand_name}</BrandName>
          <Price>$ {product.price}</Price>
        </RightSideHeader>
      </Header>

      <Footer>
        <div className="d-flex">
          <Location>
            {product.address.state} {product.address.city}
          </Location>
          <Td>
            Date: <DateSpan>{date}</DateSpan>
          </Td>
        </div>

        <Discription>{product.discription}</Discription>
      </Footer>
    </Card>
  );
};
