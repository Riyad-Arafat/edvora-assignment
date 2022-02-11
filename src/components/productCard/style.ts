import styled from "styled-components";

export const Card = styled.figure`
  background-color: #232323;
  color: #fff;
  width: 220px;

  border-radius: 4.68775px;
  transition: 0.15s padding ease;
  cursor: pointer;
  &:hover {
    padding: 0px 5px;
  }
  @media (max-width: 798px) {
    width: 95%;
    margin: 15px 0px;
  }
`;
export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 5px;
`;

export const ProductName = styled.h1`
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  white-space: pre-line;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const BrandName = styled.h5`
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 10px 0;
`;

export const Price = styled.h5`
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  margin: 0;
`;

export const RightSideHeader = styled.div`
  padding-inline-start: 20px;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 10px;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
`;

export const Td = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
`;

export const Location = styled.div`
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
`;

export const DateSpan = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
`;

export const Discription = styled.figcaption`
  font-size: 11px;
  line-height: 13px;
  color: rgba(255, 255, 255, 0.6);
  padding-top: 14px;
`;

export const Footer = styled.div`
  padding-inline: 11px;
  padding-bottom: 14px;
`;
