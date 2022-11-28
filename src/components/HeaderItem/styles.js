import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderItemMain = styled(Link)`
    background-color: ${(props) => (props.active ? props.color : "unset")};
    border: ${(props) => props.color} 3px solid;
    color: ${(props) => (props.active ? "white" : "black")};
    border-radius: 15px;
    text-decoration: none;
    font-size: 28;
    font-weight: bold;
    padding: 10px 20px;
    transition: 0.3s;
    :hover {
        background-color: ${(props) => props.color};
        color: white;
    }
`;
