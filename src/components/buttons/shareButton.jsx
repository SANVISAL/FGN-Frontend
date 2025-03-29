import React from "react";
import styled from "styled-components";
import { shareIcon } from "../../assets";

const ShareButton = () => {
  return (
    <StyledWrapper>
      <div className="menu-container flex items-center justify-center">
        <input type="checkbox" className="checkbox" />
        <div className="button-menu">
          <img src={shareIcon} alt="share" width={20} height={20} />
        </div>
        <button className="option-a option flex items-center justify-center">
          A
        </button>
        <button className="option-b option flex items-center justify-center">
          B
        </button>
        <button className="option-c option flex items-center justify-center">
          C
        </button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .menu-container {
    position: relative;
    width: 60px;
    height: 60px;
  }

  .button-menu {
    position: absolute;
    z-index: 2;
    background-color: #000;
    color: #1e1e1e;
    font-size: 30px;
    font-weight: 700;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 3px 10px rgba(16, 16, 16, 0.5);
  }

  .checkbox {
    position: absolute;
    width: 60px;
    height: 60px;
    opacity: 0;
    z-index: 3;
    cursor: pointer;
  }

  .option {
    position: absolute;
    background-color: #1e1e1e;
    border: 2px solid #ffdd00;
    color: #ffdd00;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.3s;
    box-shadow: 3px 3px 10px rgba(16, 16, 16, 0.5);
    transform: translateX(0);
    opacity: 0;
  }

  .checkbox:checked ~ .option {
    opacity: 1;
  }

  .checkbox:checked ~ .option-a {
    transition-delay: 0.1s;
    transform: translateX(-50px);
  }

  .checkbox:checked ~ .option-b {
    transition-delay: 0.2s;
    transform: translateX(-100px);
  }

  .checkbox:checked ~ .option-c {
    transition-delay: 0.3s;
    transform: translateX(-150px);
  }
`;

export default ShareButton;
