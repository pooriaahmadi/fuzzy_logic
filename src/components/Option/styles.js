import styled, { css, keyframes } from "styled-components";

export const nope = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const OptionMain = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-basis: 45%;
    border-radius: 15px;
    padding: 10px;
    background-color: ${(props) => (props.isClicked ? "#8ac926" : props.color)};
    cursor: pointer;
    transform: translate3d(0, 0, 0);
    outline: none;
    border: none;
    transition: 0.5s;
    > p {
        color: white;
        font-size: 20px;
        font-weight: bold;
    }
    :focus {
        animation: ${(props) =>
            props.correct
                ? ""
                : css`
                      ${nope} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
                  `};
    }
`;
