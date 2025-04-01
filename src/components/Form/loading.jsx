import React from "react";
import styled from "styled-components";
import { profile } from "../../assets";

const Loader = () => {
  return (
    <StyledWrapper>
      {/* <div className="loader" /> */}
      <div className="loader">
        {/* <img src={profile} alt="profile" className="image" /> */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    width: 70px;
    height: 70px;
    margin: auto;
    position: relative;
  }

  .loader:before {
    content: "";
    width: 78px;
    height: 5px;
    background: #f0808050;
    position: absolute;
    top: 80px;
    left: 0;
    border-radius: 50%;
    animation: shadow324 0.5s linear infinite;
  }
  .image {
    width: 50px; /* Set the image width */
    height: 50px; /* Set the image height */
    object-fit: contain; /* Ensure the image scales without distorting */
  }
  .loader:after {
    content: "";
    width: 100%;
    height: 100%;
    background: #e85124;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: jump7456 0.5s linear infinite;
  }

  @keyframes jump7456 {
    15% {
      border-bottom-right-radius: 3px;
    }

    25% {
      transform: translateY(9px) rotate(22.5deg);
    }

    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }

    75% {
      transform: translateY(9px) rotate(67.5deg);
    }

    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow324 {
    0%,
    100% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.2, 1);
    }
  }
`;

export default Loader;
