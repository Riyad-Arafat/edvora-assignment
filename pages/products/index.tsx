import styled from "styled-components";
import { Filter } from "../../src/components/filter";
import { ProductsSlider } from "../../src/components/slider";
import { Product } from "../../src/types/product";

const Title = styled.h1`
  /* color: black; */
  font-size: 50px;
`;

type Categories = {
  [key: string]: Product[];
};

export default function Products({ categories }: { categories: Categories }) {
  return (
    <>
      <Title>Products</Title>

      <Filter />

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

  let categories: Categories = {};

  products.forEach((prod: Product) => {
    if (!categories[prod.brand_name]) {
      categories[prod.brand_name] = [prod];
    } else {
      categories[prod.brand_name] = [...categories[prod.brand_name], prod];
    }
  });

  // Pass data to the page via props
  return { props: { categories } };
}
