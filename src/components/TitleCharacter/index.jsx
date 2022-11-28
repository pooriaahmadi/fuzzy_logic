import { TitleCharacterMain } from "./styles";
import { useEffect, useState } from "react";
import { getRandomNumber } from "../../utils/numbers";

const TitleCharacter = ({
    children,
    size,
    translationYLimit,
    translationXLimit,
    rotationLimit,
}) => {
    const [y, setY] = useState();
    const [x, setX] = useState();
    const [rotation, setRotation] = useState();
    useEffect(() => {
        setY(
            getRandomNumber({ min: -translationYLimit, max: translationXLimit })
        );
        setX(
            getRandomNumber({ min: -translationXLimit, max: translationXLimit })
        );
        setRotation(
            getRandomNumber({ min: -rotationLimit, max: rotationLimit })
        );
    }, []);
    return (
        <TitleCharacterMain x={x} y={y} rotation={rotation} size={size}>
            {children}
        </TitleCharacterMain>
    );
};

export default TitleCharacter;
