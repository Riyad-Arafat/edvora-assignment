import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../../types/product";

const Card = styled.figure`
  background-color: #232323;
  width: 210px;
  height: 150px;
  border-radius: 4.68775px;
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.product_name} />
      <figcaption>{product.discription}</figcaption>
    </Card>
  );
};
