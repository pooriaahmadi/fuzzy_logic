import Explanation from "../../components/Explanation";
import { WhyMain } from "../Why/styles";
import how from "../../images/how.png";
import { TextImage } from "../Who/styles";

const How = () => {
    return (
        <WhyMain>
            <TextImage>
                <Explanation
                    title="Overall structure"
                    source="https://www.section.io/engineering-education/an-overview-of-fuzzy-logic-system/#:~:text=A%20fuzzy%20logic%20system%20uses,categories%20(true%20or%20false)."
                    style={{ flexBasis: "60%" }}
                >
                    <p>
                        Fuzzy logic works by receiving raw input and breaking it
                        down into vague sets that would later be useful for
                        processing. Every fuzzy logic implementation has a rules
                        database in which it has the logic and conditions that
                        the input undergoes during processing. The vague sets
                        get processed based on the rules in the database and
                        then turned into an answer, normally an integer using a
                        process called “Defuzzifier”.
                    </p>
                </Explanation>
                <img style={{ width: "400px" }} src={how} />
            </TextImage>
            <TextImage>
                <Explanation
                    title="Rule Base"
                    source="https://www.section.io/engineering-education/an-overview-of-fuzzy-logic-system/#:~:text=A%20fuzzy%20logic%20system%20uses,categories%20(true%20or%20false)."
                    style={{ flexBasis: "45%" }}
                >
                    <p>
                        Rule base contains the rules and IF statements that a
                        fuzzy logic based controlling system would need to
                        operate as intended.
                    </p>
                </Explanation>
                <Explanation
                    title="Fuzzifier"
                    source="https://www.section.io/engineering-education/an-overview-of-fuzzy-logic-system/#:~:text=A%20fuzzy%20logic%20system%20uses,categories%20(true%20or%20false)."
                    style={{ flexBasis: "45%" }}
                >
                    <p>
                        The part of the process in which the raw input will get
                        broken down into fuzzy sets for further processing in
                        Inference Engine.
                    </p>
                </Explanation>
            </TextImage>
            <TextImage>
                <Explanation
                    title="Inference Engine"
                    source="https://www.section.io/engineering-education/an-overview-of-fuzzy-logic-system/#:~:text=A%20fuzzy%20logic%20system%20uses,categories%20(true%20or%20false)."
                    style={{ flexBasis: "45%" }}
                >
                    <p>
                        Inference Engine is the part that loads all the rules
                        from the Rule Base and applies it to the fuzzy sets
                        generated from the inputs. This process also determines
                        what rules need to be applied on the sets for the ideal
                        output.
                    </p>
                </Explanation>
                <Explanation
                    title="Defuzzifier"
                    source="https://www.section.io/engineering-education/an-overview-of-fuzzy-logic-system/#:~:text=A%20fuzzy%20logic%20system%20uses,categories%20(true%20or%20false)."
                    style={{ flexBasis: "45%" }}
                >
                    <p>
                        This process turns the processed fuzzy sets into an
                        explicit output, the same way the input was given to the
                        program.
                    </p>
                </Explanation>
            </TextImage>
        </WhyMain>
    );
};

export default How;
