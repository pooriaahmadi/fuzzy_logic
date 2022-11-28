import { useState } from "react";
import Explanation from "../../components/Explanation";
import { Title } from "../../components/Explanation/styles";
import Option from "../../components/Option";
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
            <Explanation title="What is Fuzzy Logic?">
                <p>
                    like most other activities in life and indeed the universe
                    -- is not easily translated into the absolute terms of 0 and
                    1. Whether everything is ultimately describable in binary
                    terms is a philosophical question worth pursuing, but in
                    practice, much data we might want to feed a computer is in
                    some state in between and so, frequently, are the results of
                    computing
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia ducimus sit
                                    dignissimos dolores esse natus atque, modi
                                    maiores illo nam ipsam omnis tenetur debitis
                                    nemo nobis laboriosam recusandae, magnam
                                    veritatis!
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quia ducimus sit
                                    dignissimos dolores esse natus atque, modi
                                    maiores illo nam ipsam omnis tenetur debitis
                                    nemo nobis laboriosam recusandae, magnam
                                    veritatis!
                                </p>
                            </Explanation>
                        )}
                    </Logic>
                </Logics>
            </QuestionDiv>
        </WhatMain>
    );
};
export default What;
