import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoText = styled.h2`
  font-family; 'Righteous', cursive;
  color: #fff;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return <LogoText>$RASTA</LogoText>;
};

export default Logo;
