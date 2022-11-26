import TitleCharacter from "../TitleCharacter";
import { FuzzyTitleDiv } from "./styles";

const FuzzyTitle = ({ children, size }) => {
    return (
        <FuzzyTitleDiv>
            {children.split("").map((character, index) => {
                if (character == " ") {
                    return <span style={{ width: "20px" }}></span>;
                }
                return (
                    <TitleCharacter size={size} key={index}>
                        {character}
                    </TitleCharacter>
                );
            })}
        </FuzzyTitleDiv>
    );
};

export default FuzzyTitle;
