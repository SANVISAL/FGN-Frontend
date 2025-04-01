import React from "react";
import styled from "styled-components";

const FaceBookButton = () => {
  return (
    <StyledWrapper>
      <button className="LinkedinBtn">
        <span className="svgContainer">
          <svg
            viewBox="0 0 24 24"
            height={40}
            width={40}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
              fill="#ffffff"
            />
          </svg>
        </span>
        <span className="BG" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .LinkedinBtn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .LinkedinBtn .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 1px; /* Adjusted letter spacing */
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .LinkedinBtn .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #0165e1;
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .LinkedinBtn:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Added box shadow effect */
  }

  .LinkedinBtn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .LinkedinBtn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }
`;

export default FaceBookButton;
