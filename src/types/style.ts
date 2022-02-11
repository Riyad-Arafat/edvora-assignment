import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  margin-top: 0;
`;

export const Container = styled.main`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

export const FilterCol = styled.div`
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

export const ProductsCol = styled.div`
  position: relative;
  width: 75%;
  @media (max-width: 1380px) {
    width: 100%;
  }
`;
