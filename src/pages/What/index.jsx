import { useState } from "react";
import Explanation from "../../components/Explanation";
import { Title } from "../../components/Explanation/styles";
import Option from "../../components/Option";
import Takeaways from "../../components/Takeaways";
import {
    Logic,
    Logics,
    LogicTitle,
    Options,
    QuestionDiv,
    WhatMain,
} from "./styles";

const What = () => {
    const [booleanExplanation, setBooleanExplanation] = useState(false);
    const [fuzzyExplanation, setFuzzyExplanation] = useState(false);

    const handleBooleanClick = () => {
        setBooleanExplanation(true);
    };

    const handleFuzzyClick = () => {
        setFuzzyExplanation(true);
    };

    return (
        <WhatMain>
            <Takeaways>
                <p>
                    Fuzzy logic is better than boolean logic in real world
                    problems
                </p>
                <p>Probability and Fuzzy Logic are NOT the same</p>
            </Takeaways>
            <Explanation
                title="What is Fuzzy Logic?"
                source="https://www.geeksforgeeks.org/fuzzy-logic-introduction/"
            >
                <p>
                    The term “fuzzy” refers to things that are unclear or vague.
                    In the real world, we frequently encounter situations in
                    which we are unable to determine whether a state is true or
                    false; their fuzzy logic provides extremely valuable
                    flexibility for reasoning. In this way, we can consider any
                    situation’s inaccuracies and uncertainties. Boolean logic is
                    only able to output the extreme versions of the answer and
                    when the answer is 50/50, the output of boolean logic is
                    going to be inaccurate or not practical.
                </p>
            </Explanation>
            <QuestionDiv>
                <Title>
                    <h1>
                        The Degrees of Truth: How hot is a 35° cup of coffee?
                    </h1>
                </Title>
                <Logics>
                    <Logic>
                        <LogicTitle>Boolean Logic:</LogicTitle>
                        <Options onClick={handleBooleanClick}>
                            <Option color="#e71d36">Yes</Option>
                            <Option color="#0069ff">No</Option>
                        </Options>
                        {booleanExplanation && (
                            <Explanation
                                title="Which one is correct?"
                                style={{
                                    padding: "unset",
                                    marginTop: "20px",
                                    boxShadow: "unset",
                                }}
                                titleStyle={{
                                    fontSize: "18px",
                                }}
                            >
                                <p>
                                    Since a 35° cup of coffee is neither hot nor
                                    cold, none of the answers are true. That’s
                                    were fuzzy logic comes in handy
                                </p>
                            </Explanation>
                        )}
                    </Logic>
                    <Logic>
                        <LogicTitle>Fuzzy Logic:</LogicTitle>
                        <Options onClick={handleFuzzyClick}>
                            <Option color="#e71d36">Very much</Option>
                            <Option correct color="#ed006d">
                                Fairly so
                            </Option>
                            <Option correct color="#da02a6">
                                Moderately
                            </Option>
                            <Option correct color="#a646da">
                                Somewhat
                            </Option>
                            <Option color="#0069ff">Very little</Option>
                        </Options>
                        {fuzzyExplanation && (
                            <Explanation
                                title="Which one is correct?"
                                style={{
                                    padding: "unset",
                                    marginTop: "20px",
                                    boxShadow: "unset",
                                }}
                                titleStyle={{
                                    fontSize: "18px",
                                }}
                            >
                                <p>
                                    “Very little” and “Very much” are the same
                                    as “yes” or “no” in Boolean logic, thus
                                    making them impractical for the answer. Many
                                    people classify 35 degrees celsius in
                                    various groups so the 3 options between
                                    “very little” and “very much” are
                                    correct/practical
                                </p>
                            </Explanation>
                        )}
                    </Logic>
                </Logics>
            </QuestionDiv>
            <Explanation
                title="The Degrees of Truth"
                source="https://academickids.com/encyclopedia/index.php/Degree_of_truth"
            >
                <p>
                    Since 0 and 1 are not going to be practical in our real life
                    problems, any real number between 0 and 1 is what would be
                    suited as answers to our problems. The Degrees of Truth
                    refers to any real numbers between 0 and 1 that would be the
                    closest to what we would need in our real life problems;
                    However this concept should not be confused with
                    probability. A coin has a 50/50 chance of being absolute 0
                    and 1; While The Degrees of Truth can be whatever between 0
                    and 1.
                </p>
            </Explanation>
        </WhatMain>
    );
};
export default What;
