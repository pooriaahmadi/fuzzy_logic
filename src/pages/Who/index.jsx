import Explanation from "../../components/Explanation";
import { TextImage, WhoMain } from "./styles";
import pensive from "../../images/pensive.png";

const Who = () => {
    return (
        <WhoMain>
            <Explanation title="Who came up with Fuzzy Logic?">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
                numquam quis harum? Fugiat, obcaecati! Laborum vel laudantium
                provident odio incidunt explicabo, labore qui id veniam
                exercitationem error fuga deserunt amet. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Dolor debitis repudiandae,
                qui perspiciatis saepe ex harum quisquam ratione fugiat dolorem
                soluta delectus quam iure voluptatum illum, sit impedit sed
                ducimus.
            </Explanation>
            <TextImage>
                <Explanation
                    title="Who came up with Fuzzy Logic?"
                    style={{ flexBasis: "30%", flexGrow: "1" }}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Illum numquam quis harum? Fugiat, obcaecati! Laborum vel
                    laudantium provident odio incidunt explicabo, labore qui id
                    veniam exercitationem error fuga deserunt amet. Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Dolor debitis
                    repudiandae, qui perspiciatis saepe ex harum quisquam
                    ratione fugiat dolorem soluta delectus quam iure voluptatum
                    illum, sit impedit sed ducimus.
                </Explanation>
                <img src={pensive} />
            </TextImage>
        </WhoMain>
    );
};

export default Who;
