import TitleCharacter from "../TitleCharacter";
import { FuzzyTitleDiv } from "./styles";

const FuzzyTitle = ({
    children,
    size,
    spaceGap,
    translationYLimit,
    translationXLimit,
    rotationLimit,
}) => {
    return (
        <FuzzyTitleDiv>
            {children.split("").map((character, index) => {
                if (character == " ") {
                    return (
                        <span
                            key={index}
                            style={{ width: `${spaceGap}px` }}
                        ></span>
                    );
                }
                return (
                    <TitleCharacter
                        size={size}
                        key={index}
                        translationYLimit={translationYLimit}
                        translationXLimit={translationXLimit}
                        rotationLimit={rotationLimit}
                    >
                        {character}
                    </TitleCharacter>
                );
            })}
        </FuzzyTitleDiv>
    );
};

export default FuzzyTitle;
