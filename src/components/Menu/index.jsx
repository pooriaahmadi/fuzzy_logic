import { useState } from "react";
import MenuItem from "../MenuItem";
import { MenuDiv } from "./styles";

const LINKS = [
    {
        color: "#8ac926",
        link: "/",
        text: "Home",
    },
    {
        color: "#E71D36",
        link: "/",
        text: "What?",
    },
    {
        color: "#2EC4B6",
        link: "/",
        text: "Why?",
    },
    {
        color: "#FF9F1C",
        link: "/",
        text: "Home",
    },
    {
        color: "#011627",
        link: "/",
        text: "Home",
    },
    {
        color: "#0069ff",
        link: "/",
        text: "Home",
    },
];

const Menu = () => {
    const [id, setId] = useState(0);

    return (
        <MenuDiv>
            {LINKS.map((linkObject, index) => (
                <MenuItem
                    {...linkObject}
                    id={index}
                    key={index}
                    currentId={id}
                    setId={setId}
                >
                    {linkObject.text}
                </MenuItem>
            ))}
        </MenuDiv>
    );
};

export default Menu;
