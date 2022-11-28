import styled from "styled-components";

export const TitleCharacterMain = styled.h1`
    font-size: ${(props) => props.size}px;
    font-weight: normal;
    transform: translateY(${(props) => props.y}px)
        translateX(${(props) => props.x}px)
        rotate(${(props) => props.rotation}deg);
    transition: 0.5s;
    :hover {
        transform: scale(1.1);
    }
`;
