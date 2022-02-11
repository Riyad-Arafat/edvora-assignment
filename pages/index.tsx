import { useState } from "react";
import { Filter } from "../src/components/filter";
import { ProductCard } from "../src/components/productCard";
import { ProductsSlider, SmallViewContainer } from "../src/components/slider";
import { Product } from "../src/types/product";
import { Container, FilterCol, ProductsCol, Title } from "../src/types/style";

type Categories = {
  [key: string]: Product[];
};

type Props = {
  products: Product[];
  categories: Categories;
  brands: string[];
  cities: string[];
  states: string[];
};

export default function Home({ categories, products, ...props }: Props) {
  const [result, setResult] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const filter = (
    by: "product_name" | "brand_name" | "city" | "state",
    value: string
  ) => {
    let res: Product[] = [];
    if (result.length > 0) res = result;
    else res = products;
    console.log({ res, result, products });

    if (by !== "city" && by !== "state")
      return res.filter((prod) =>
        String(prod[by]).toLowerCase().match(value.toLowerCase()) ? prod : false
      );
    else
      return res.filter((prod) =>
        String(prod.address[by]).toLowerCase().match(value.toLowerCase())
          ? prod
          : false
      );
  };

  const handelSearch = (
    type: "product_name" | "brand_name" | "city" | "state",
    value: string
  ) => {
    console.log({ type, value });
    if (value) {
      setResult(filter(type, value));
      setIsSearching(true);
    }
    if (!value) {
      setResult([]);
      setIsSearching(false);
    }
  };

  return (
    <>
      <Container>
        <FilterCol>
          <Filter
            onSearchChange={(value) => handelSearch("product_name", value)}
            onBrandChange={(value) => handelSearch("brand_name", value)}
            onCityChange={(value) => handelSearch("city", value)}
            onStateChange={(value) => handelSearch("state", value)}
            {...props}
          />
        </FilterCol>
        <ProductsCol>
          <Title>Edvora</Title>
          <h2
            style={{
              color: "#FFFFFF80",
              marginBlock: 15,
              paddingInlineStart: 10,
            }}
          >
            Products
          </h2>
          {result.length === 0 && !isSearching ? (
            Object.keys(categories).map((brandName, index) => (
              <ProductsSlider
                key={index}
                products={categories[brandName]}
                brandName={brandName}
              />
            ))
          ) : (
            <SmallViewContainer>
              {result.map((prod, index) => (
                <ProductCard key={index} product={prod} />
              ))}
            </SmallViewContainer>
          )}
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
  let brands: string[] = [];
  let cities: string[] = [];
  let states: string[] = [];

  products.forEach((prod: Product) => {
    if (!categories[prod.brand_name]) {
      categories[prod.brand_name] = [prod];
      brands.push(prod.brand_name);
    } else {
      categories[prod.brand_name] = [...categories[prod.brand_name], prod];
    }
    if (!cities.includes(prod.address.city)) cities.push(prod.address.city);
    if (!cities.includes(prod.address.state)) states.push(prod.address.state);
  });

  // Pass data to the page via props
  return { props: { products, categories, brands, cities, states } };
}
