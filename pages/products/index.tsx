import { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductsSlider } from "../../src/components/slider";
import { Product } from "../../src/types/product";

const Title = styled.h1`
  color: black;
  font-size: 50px;
`;

type Categories = {
  [key: string]: Product[];
};

export default function Products({ products }: { products: Product[] }) {
  const [categories, setCategoris] = useState<Categories>({});

  useEffect(() => {
    let cats: {
      [key: string]: Product[];
    } = {};
    products.forEach((prod) => {
      if (!cats[prod.brand_name]) {
        cats[prod.brand_name] = [prod];
      } else {
        cats[prod.brand_name] = [...cats[prod.brand_name], prod];
      }
    });

    console.log(cats);

    setCategoris(cats);
  }, [products]);
  return (
    <>
      <Title>Products</Title>

      {Object.keys(categories).map((brandName, index) => (
        <ProductsSlider
          key={index}
          products={categories[brandName]}
          brandName={brandName}
        />
      ))}
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://assessment-edvora.herokuapp.com/`);
  const products = await res.json();

  // Pass data to the page via props
  return { props: { products } };
}
