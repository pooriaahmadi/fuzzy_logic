import cat from "../../images/cat.svg";
import arrow from "../../images/arrow.svg";
import {
    Cat,
    Content,
    ContentWrapper,
    TakeawayDiv,
    TakeawayInner,
    Title,
} from "./styles";
import { useState } from "react";

const Takeaways = ({ children }) => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    };
    return (
        <TakeawayDiv active={active}>
            <ContentWrapper onClick={handleClick}>
                <Cat src={cat} />
                <Title active={active}>
                    <img src={arrow} />
                    <h1>Key Take-aways</h1>
                </Title>
                <Content>{children}</Content>
            </ContentWrapper>
        </TakeawayDiv>
    );
};

export default Takeaways;
