import React, { useState } from "react";
import {
  Container,
  DropDownButton,
  DropDownItem,
  DropDownMenu,
  SearchInput,
} from "./style";

export const Filter = () => {
  return (
    <Container>
      <SearchInput placeholder="Filter" />
      <br />
      <Brand />
      <State />
      <City />
    </Container>
  );
};

const Brand = () => {
  const [brandOpen, setBrandOpen] = useState(false);
  return (
    <div>
      <DropDownButton onClick={() => setBrandOpen(!brandOpen)}>
        <span>Brand</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={10}
            viewBox="0 0 12 10"
            fill="none"
          >
            <path
              d="M6.09409 9.19L0.816466 0.0488873L11.3717 0.0488864L6.09409 9.19Z"
              fill="#A5A5A5"
            />
          </svg>
        </span>
      </DropDownButton>
      <DropDownMenu className={`expandable ${brandOpen ? "active" : ""}`}>
        <div style={{ width: "100%" }}>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
        </div>
      </DropDownMenu>
    </div>
  );
};

const State = () => {
  const [brandOpen, setBrandOpen] = useState(false);
  return (
    <div>
      <DropDownButton onClick={() => setBrandOpen(!brandOpen)}>
        <span>Brand</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={10}
            viewBox="0 0 12 10"
            fill="none"
          >
            <path
              d="M6.09409 9.19L0.816466 0.0488873L11.3717 0.0488864L6.09409 9.19Z"
              fill="#A5A5A5"
            />
          </svg>
        </span>
      </DropDownButton>
      <DropDownMenu className={`expandable ${brandOpen ? "active" : ""}`}>
        <div style={{ width: "100%" }}>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
        </div>
      </DropDownMenu>
    </div>
  );
};

const City = () => {
  const [brandOpen, setBrandOpen] = useState(false);
  return (
    <div>
      <DropDownButton onClick={() => setBrandOpen(!brandOpen)}>
        <span>Brand</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={10}
            viewBox="0 0 12 10"
            fill="none"
          >
            <path
              d="M6.09409 9.19L0.816466 0.0488873L11.3717 0.0488864L6.09409 9.19Z"
              fill="#A5A5A5"
            />
          </svg>
        </span>
      </DropDownButton>
      <DropDownMenu className={`expandable ${brandOpen ? "active" : ""}`}>
        <div style={{ width: "100%" }}>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
          <DropDownItem>dsgmkorg</DropDownItem>
        </div>
      </DropDownMenu>
    </div>
  );
};
