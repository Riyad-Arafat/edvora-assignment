import { useEffect } from "react";
import styled from "styled-components";
import { Filter } from "../../src/components/filter";
import { ProductsSlider } from "../../src/components/slider";
import { Product } from "../../src/types/product";

const Title = styled.h1`
  font-size: 50px;
  margin-top: 0;
`;

const Container = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

const FilterCol = styled.div`
  position: relative;
  width: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1380px) {
    width: 100%;
    display: block;
  }
`;

const ProductsCol = styled.div`
  position: relative;
  width: 75%;
  @media (max-width: 1380px) {
    width: 100%;
  }
`;

type Categories = {
  [key: string]: Product[];
};

export default function Products({ categories }: { categories: Categories }) {
  useEffect(() => {
    console.log(categories);
  });
  return (
    <>
      <Container>
        <FilterCol>
          <Filter />
        </FilterCol>
        <ProductsCol>
          <Title>Products</Title>

          {Object.keys(categories).map((brandName, index) => (
            <ProductsSlider
              key={index}
              products={categories[brandName]}
              brandName={brandName}
            />
          ))}
        </ProductsCol>
      </Container>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://assessment-edvora.herokuapp.com/`);
  const products = await res.json();

  let categories: Categories = {};

  products.forEach((prod: Product) => {
    if (!categories[prod.brand_name]) {
      categories[prod.brand_name] = [prod];
    } else {
      categories[prod.brand_name] = [...categories[prod.brand_name], prod];
    }
  });

  console.log(Object.keys(categories).map((ca) => ca.length));
  // Pass data to the page via props
  return { props: { categories } };
}
