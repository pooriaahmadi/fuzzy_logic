import { TitleCharacterMain } from "./styles";
import { useState } from "react";

const getRandomNumber = ({ min, max }) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const TitleCharacter = ({ children, size }) => {
    const [y, setY] = useState(getRandomNumber({ min: -5, max: 5 }));
    const [rotation, setRotation] = useState(
        getRandomNumber({ min: -30, max: 30 })
    );
    return (
        <TitleCharacterMain y={y} rotation={rotation} size={size}>
            {children}
        </TitleCharacterMain>
    );
};

export default TitleCharacter;
