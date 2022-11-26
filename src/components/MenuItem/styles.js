import styled from "styled-components";

export const MenuLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    width: ${(props) => (props.selected ? 160 : 130)}px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: ${(props) => props.color};
    transition: 0.5s;
    > p {
        z-index: 1;
        font-size: 25px;
        font-weight: bold;
        color: white;
    }
    ::before {
        content: "";
        background-color: inherit;
        position: absolute;
        top: 0;
        left: -30px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        z-index: 0;
    }
`;
