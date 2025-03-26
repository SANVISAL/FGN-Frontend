import React from "react";
import styled from "styled-components";
import lenovo from "../../assets/logo/lenovo.svg";
import dell from "../../assets/logo/dell.svg";
import asus from "../../assets/logo/asus.svg";
import acer from "../../assets/logo/acer.svg";
import apple from "../../assets/logo/apple.svg";

const cards = [
  { title: "Lenovo", image: lenovo },
  { title: "Dell", image: dell },
  { title: "Asus", image: asus },
  { title: "Acer", image: acer },
  { title: "Apple", image: apple },
];

const LogoRolling = () => {
  return (
    <StyledWrapper>
      <div className="slider">
        <div className="list">
          {/* Duplicate cards to create a seamless infinite loop */}
          {[...cards, ...cards].map((card, index) => (
            <div className="item" key={index}>
              <img src={card.image} alt={card.title} />
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .slider {
    width: 100%;
    height: 100px; /* Adjust height as needed */
    overflow: hidden;
    position: relative;
  }

  .slider .list {
    display: flex;
    gap: 20px; /* Space between images */
    width: max-content; /* Allow flexbox to take as much space as needed */
    animation: scroll 10s linear infinite;
  }

  .slider .list .item {
    width: 150px; /* Adjust size */
    height: 100px;
  }

  .slider .list .item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export default LogoRolling;
