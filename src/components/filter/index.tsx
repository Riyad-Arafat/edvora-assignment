import React, { useState } from "react";
import {
  Container,
  DropDownButton,
  DropDownItem,
  DropDownMenu,
  SearchInput,
} from "./style";

type OnChange = (input: string) => void;

type FilterProps = {
  onSearchChange: OnChange;
  onBrandChange: OnChange;
  onCityChange: OnChange;
  onStateChange: OnChange;
  brands?: string[];
  cities?: string[];
  states?: string[];
};

export const Filter = ({
  onSearchChange,
  onBrandChange,
  onCityChange,
  onStateChange,
  brands,
  cities,
  states,
}: FilterProps) => {
  return (
    <Container>
      <SearchInput
        placeholder="Filter"
        name="filter"
        onChange={(e) => onSearchChange(e.currentTarget.value)}
      />
      <br />
      <DropDown
        onChange={(brand) => onBrandChange(brand)}
        Items={brands || []}
        name="Brand"
      />
      <DropDown
        onChange={(city) => onCityChange(city)}
        Items={cities || []}
        name="City"
      />
      <DropDown
        onChange={(state) => onStateChange(state)}
        Items={states || []}
        name="State"
      />
    </Container>
  );
};

const DropDown = ({
  onChange,
  Items,
  name,
}: {
  onChange: OnChange;
  Items: string[] | [];
  name: string;
}) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(name);

  const handelChange = (value: string) => {
    setItem(value);
    onChange(value);
  };

  return (
    <div>
      <DropDownButton onClick={() => setOpen(!open)}>
        <span>{item}</span>
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
      <DropDownMenu className={`expandable ${open ? "active" : ""}`}>
        <div style={{ width: "100%" }}>
          {Items.map((item, index) => (
            <DropDownItem key={index} onClick={() => handelChange(item)}>
              {item}
            </DropDownItem>
          ))}
        </div>
      </DropDownMenu>
    </div>
  );
};
