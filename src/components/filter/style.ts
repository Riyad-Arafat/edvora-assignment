import styled from "styled-components";

export const Container = styled.div`
  width: 228px;
  min-height: 275px;
  background: #131313;
  border-radius: 15px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1380px) {
    width: auto;
    flex-direction: column;
  }
`;
export const SearchInput = styled.input`
  padding: 12px 0;
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  color: #a5a5a5;
  background: none;
  border: 0;
  border-bottom: 1px solid;

  &:focus-visible {
    outline: none;
  }
`;

export const DropDownButton = styled.button`
  height: 37.5px;
  background: #232323;
  border-radius: 4.68775px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const DropDownMenu = styled.div`
  background: #232323;
  margin-block: 5px;
  border-radius: 4.68775px;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  &.active {
    height: 220px !important;
    padding: 15px 10px;
  }
`;

export const DropDownItem = styled.button`
  height: 36.5px;
  background: #131313;
  border-radius: 4.68775px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  cursor: pointer;
  width: 100%;
  border: 0;
  margin: 5px 0px;
`;
