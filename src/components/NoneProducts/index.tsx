import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  height: 62vh;
`;

export const NoneProducts = () => {
  return (
    <Container>
      <h1>No products Available</h1>
      <h2>
        please Refresh the page <h2 style={{ display: "inline" }}>OR</h2> if you
        using the filter then there is no match :D
      </h2>
    </Container>
  );
};
