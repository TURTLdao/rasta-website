import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "./Button";

const Title = styled.h2`
  font-family: "Akaya Telivigala", cursive;
  text-transformation: capitalize;
  width: 80%;
  color: #9f9f9f;
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: red;
  }

  .text-2 {
    color: yellow;
  }

  .text-3 {
    color: green;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: #9c9c9c;
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='text-1'>Rasta Community on Cardano</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>Utilities with the $RASTA token</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'>NFTs, Crafts, </span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>
        <i>$RASTA</i> is not just a meme coin but a lifestyle.<br/>
        The <i>$RASTA</i> token was created to bring together all the stoners of the Cardano community and beyond.
      </SubTitle>
      <ButtonContainer>
   <a
          href="https://twitter.com/HighOnNfts"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text="Explore"
            href="https://twitter.com/HighOnNfts"
          >
          </Button>
        </a>   

      </ButtonContainer>
</>
  );
};

export default TypeWriterText;
