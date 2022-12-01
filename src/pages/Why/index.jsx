import Explanation from "../../components/Explanation";
import Option from "../../components/Option";
import { Logic, Logics, LogicTitle } from "../What/styles";
import { TextImage } from "../Who/styles";
import { NewOptions, WhyMain } from "./styles";
import graph from "../../images/graph.png";
import Takeaways from "../../components/Takeaways";

const Why = () => {
    return (
        <WhyMain>
            <Takeaways></Takeaways>

            <Explanation title="Why do we need Fuzzy Logic?">
                <p>
                    We use fuzzy logic in our daily lives so often that we do
                    not know that it even exists. The problems that we encounter
                    everyday are not easily represented by the boolean logic or
                    in other words true and false. The solutions to our problems
                    are often somewhere in between or closer to one side than
                    the other but not absolutely true or false. That is why we
                    use fuzzy sets to find the answer that would make the most
                    sense but not always efficient. For example If there is a
                    50/50 chance that it will rain when planning to go outside,
                    we dress up to cover both possibilities rather than covering
                    ourselves with waterproof coats or completely ignoring the
                    rain.
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
                    title="“Precision is not Truth” — Henri E. B. Matisse"
                    style={{ flexBasis: "30%", flexGrow: "1" }}
                    source="https://medium.com/it-paragon/fuzzy-logic-approximating-imprecise-statement-54d444237820"
                >
                    <p>
                        What comes to mind when you think of the word "warm"? Is
                        it a warm cup of coffee in the middle of the winter or a
                        day in the summer? When we describe something, the words
                        we use can have different meanings to different people.
                        For instance, to one person, the term "warm" may refer
                        to something with a temperature of about 40 degrees
                        Celsius. In this case, how warm is "warm," the graph on
                        the right side of the website will demonstrate how fuzzy
                        logic can provide us with a workable solution to our
                        problem.
                    </p>
                </Explanation>
                <img style={{ flexBasis: "10%" }} src={graph} />
            </TextImage>
            <TextImage>
                <Explanation
                    title="Data Mining and Fuzzy Logic:"
                    style={{ flexBasis: "45%", flexGrow: "1" }}
                    source="https://www.investopedia.com/terms/f/fuzzy-logic.asp"
                >
                    <p>
                        Data mining, a field that includes statistics, machine
                        learning, and computer science, is the process of
                        finding significant relationships between large datasets
                        of data. A set of rules known as fuzzy logic can be used
                        to draw logical conclusions from ambiguous sets of data.
                        Fuzzy logic is a helpful method for extracting
                        meaningful relationships from this type of data because
                        data mining is frequently used to analyse imperfect
                        measurements.
                    </p>
                </Explanation>
                <Explanation
                    title="Fuzzy Logic in Artificial Intelligence?"
                    style={{ flexBasis: "45%", flexGrow: "1" }}
                    source="https://www.investopedia.com/terms/f/fuzzy-logic.asp"
                >
                    <p>
                        Although they are frequently combined, fuzzy logic and
                        machine learning are not quite the same. Fuzzy Logic
                        uses sets of rules to categorise and label data, whereas
                        machine learning uses various coping algorithms to
                        determine how humans perceive patterns in sets of data.
                        Although machine learning and fuzzy logic pursue related
                        objectives in different ways, these two techniques are
                        used in artificial intelligence (AI) to improve training
                        efficiency by giving the system more accurate and useful
                        data
                    </p>
                </Explanation>
            </TextImage>
        </WhyMain>
    );
};

export default Why;
