import FuzzyTitle from "../FuzzyTitle";
import { FooterMain, Left, Right } from "./styles";
import githubLogo from "../../images/github.png";

const Footer = () => {
    return (
        <FooterMain>
            <Left>
                <FuzzyTitle
                    rotationLimit={20}
                    size={25}
                    spaceGap={10}
                    translationXLimit={0}
                    translationYLimit={5}
                >
                    Fuzzy Logic
                </FuzzyTitle>
                <p>
                    Made with lots of ☕ by{" "}
                    <a target="_blank" href="https://pooria.tech">
                        Pooria Ahmadi
                    </a>
                </p>
                <a
                    target="_blank"
                    href="https://github.com/pooriaahmadi/fuzzy_logic"
                >
                    <img src={githubLogo} />
                </a>
            </Left>
        </FooterMain>
    );
};

export default Footer;
