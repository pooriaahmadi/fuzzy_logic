import Explanation from "../../components/Explanation";
import Option from "../../components/Option";
import { Logic, Logics, LogicTitle } from "../What/styles";
import { TextImage } from "../Who/styles";
import { NewOptions, WhyMain } from "./styles";
import graph from "../../images/graph.png";

const Why = () => {
    return (
        <WhyMain>
            <Explanation title="Why we need Fuzzy Logic?">
                <p>
                    Zadeh’s argument resembled an idea that Albert Einstein had
                    expressed four decades earlier, in his book “Geometry and
                    Experience.” “So far as the laws of mathematics refer to
                    reality, they are not certain,” Einstein wrote. “And as so
                    far as they are certain, they do not refer to reality.”
                    Fuzzy logic emerged in the context of the theory of fuzzy
                    sets, introduced by Lotfi Zadeh (1965). A fuzzy set assigns
                    a degree of membership, typically a real number from the
                    interval [0,1][0,1], to elements of a universe. Fuzzy logic
                    arises by assigning degrees of truth to propositions. The
                    standard set of truth-values (degrees) is the real unit
                    interval [0,1][0,1], where 00 represents “totally false”, 11
                    represents “totally true”, and the other values refer to
                    partial truth, i.e., intermediate degrees of truth.
                </p>
            </Explanation>
            <Logics>
                <Logic>
                    <LogicTitle>Pros:</LogicTitle>
                    <NewOptions>
                        <Option color="#8ac926">
                            Fuzzy logic is more likely to reflect real-world
                            problems than classical logic.
                        </Option>
                        <Option color="#8ac926">
                            Fuzzy algorithms can produce accurate results with
                            imprecise or inaccurate data.
                        </Option>
                    </NewOptions>
                </Logic>
                <Logic>
                    <LogicTitle>Cons:</LogicTitle>
                    <NewOptions>
                        <Option color="#E71D36">
                            Fuzzy algorithms require broad validation and
                            verification.
                        </Option>
                        <Option color="#E71D36">
                            Fuzzy control systems are dependent on human
                            expertise and knowledge.
                        </Option>
                    </NewOptions>
                </Logic>
            </Logics>
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
                <img style={{ flexBasis: "10%" }} src={graph} />
            </TextImage>
            <TextImage>
                <Explanation
                    title="Data Mining and Fuzzy Logic:"
                    style={{ flexBasis: "45%", flexGrow: "1" }}
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
                <Explanation
                    title="Fuzzy Logic in Artificial Intelligence?"
                    style={{ flexBasis: "45%", flexGrow: "1" }}
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
            </TextImage>
        </WhyMain>
    );
};

export default Why;
