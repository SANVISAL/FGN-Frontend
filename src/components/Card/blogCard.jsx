import React from "react";
import styled from "styled-components";
import profile from "../../assets/profile.svg";
import loginImage from "../../assets/loginImage.jpg";
const PortfolioCard = ({
  width = "700px",
  height = "320px",
  image,
  onclick,
}) => {
  return (
    <StyledWrapper
      width={width}
      height={height}
      image={image}
      onClick={onclick}
    >
      <div className="card"></div>
    </StyledWrapper>
  );
};
// background: mediumturquoise;
const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background: url(${(props) => props.image}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    border-radius: 15px;
    border: 2px solid gray;
    cursor: pointer;
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    background-color: rgba(173, 216, 230, 0.5);
    transition: all 0.5s;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover::before,
  .card:hover:after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }

  .card:hover:after {
    content: "Design Specialization";
    color: orange;
  }
`;

export default PortfolioCard;
