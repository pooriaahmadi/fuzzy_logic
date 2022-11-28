import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuLink = styled(Link)`
    cursor: pointer;
    width: ${(props) => (props.selected ? 160 : 130)}px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    background-color: ${(props) => (props.selected ? props.color : "unset")};
    border: ${(props) => props.color} 3px solid;
    border-style: solid none solid solid;
    transition: 0.3s;
    text-decoration: none;
    border-radius: 2em 0 0 2em;
    padding: 0 30px;
    > p {
        z-index: 1;
        font-size: 25px;
        font-weight: bold;
        transition: inherit;
        color: ${(props) => (props.selected ? "white" : "black")};
    }
    :hover {
        background-color: ${(props) => props.color};
        > p {
            color: white;
        }
    }
`;
