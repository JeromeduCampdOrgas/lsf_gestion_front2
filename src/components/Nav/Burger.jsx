import { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const StyleBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;

  padding: 1px;
  top: 300px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: ${({ open }) => (open ? "20px" : "300px")};
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "red" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Burger = () => {
  const [open, setopen] = useState(false);
  const openChange = () => {
    setopen(!open);
  };
  return (
    <>
      <StyleBurger open={open} setopen={setopen} onClick={() => openChange()}>
        <div />
        <div />
        <div />
      </StyleBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
