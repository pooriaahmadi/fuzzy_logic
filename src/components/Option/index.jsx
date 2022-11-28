import { useState } from "react";
import { OptionMain } from "./styles";

const Option = ({ children, color, correct }) => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        if (!correct) return;
        setIsClicked(true);
    };

    return (
        <OptionMain
            onClick={handleClick}
            color={color}
            correct={correct}
            isClicked={isClicked}
        >
            <p>{children}</p>
        </OptionMain>
    );
};

export default Option;
