import FuzzyTitle from "../../components/FuzzyTitle";
import { HomeDiv, Title } from "./styles";

const Home = () => {
    return (
        <HomeDiv>
            <Title>
                <FuzzyTitle size={64}>Fuzzy Logic</FuzzyTitle>
            </Title>
        </HomeDiv>
    );
};

export default Home;
