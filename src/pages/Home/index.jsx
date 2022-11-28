import { Link } from "react-router-dom";
import FuzzyTitle from "../../components/FuzzyTitle";
import Menu from "../../components/Menu";
import { Left, Right } from "../../styles/AppStyles";
import { HomeDiv, Title } from "./styles";

const KEYWORDS = [
    {
        text: "Degrees of Truth",
        link: "/",
    },
    {
        text: "True or False",
        link: "/",
    },
    {
        text: "Lotfi Zadeh",
        link: "/",
    },
    {
        text: "Natrual Language",
        link: "/",
    },
    {
        text: "Somewhere between",
        link: "/",
    },
    {
        text: "AI",
        link: "/",
    },
    {
        text: "Uncertainties",
        link: "/",
    },
    {
        text: "imprecise data",
        link: "/",
    },
];

const Home = () => {
    return (
        <>
            <Left>
                <HomeDiv>
                    <Title>
                        <FuzzyTitle
                            size={64}
                            spaceGap={20}
                            rotationLimit={30}
                            translationYLimit={5}
                            translationXLimit={0}
                        >
                            Fuzzy Logic
                        </FuzzyTitle>
                        <h2>
                            Developed by{" "}
                            <a href="https://pooria.tech" target="_blank">
                                Pooria Ahmadi
                            </a>
                        </h2>
                    </Title>
                </HomeDiv>
            </Left>
            <Right>
                <Menu />
            </Right>
        </>
    );
};

export default Home;
