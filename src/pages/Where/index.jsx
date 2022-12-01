import Explanation from "../../components/Explanation";
import { TextImage } from "../Who/styles";
import { WhyMain } from "../Why/styles";
import airconditioning from "../../images/airconditioning.jpg";

const Where = () => {
    return (
        <WhyMain>
            <TextImage>
                <Explanation
                    title="Air conditioning"
                    style={{ flexBasis: "calc(100% - 420px)", flexGrow: "1" }}
                    source="https://www.l-tron.com/fuzzy-logic-in-real-life/"
                >
                    <p>
                        Older air conditioning worked on a limit based system.
                        They turn on whenever they sense the temperature is
                        lower than the limit and turn off when they sense that
                        the temperature is higher than the maximum limit. This
                        method is inefficient and not accurate in sensitive
                        environments.
                    </p>
                    <p>
                        Newer air conditioners use fuzzy logic to determine when
                        to start and stop working, they start working before the
                        temperature reaches the limit so that when they reach
                        the peak cooling they are right at the minimum limit
                        temperature. They also stop before reaching the maximum
                        limit so that the temperature reaches the limit right
                        when the air conditioner stops fully. They also use
                        fuzzy logic to determine how cool or hot the air
                        conditioner should be in order to smoothly transition
                        between set temperatures.
                    </p>
                </Explanation>
                <img style={{ width: "400px" }} src={airconditioning} />
            </TextImage>
            <TextImage>
                <Explanation
                    title="Cooking"
                    style={{ flexBasis: "45%", flexGrow: "1" }}
                    source="https://www.l-tron.com/fuzzy-logic-in-real-life/"
                >
                    <p>
                        Same as new air conditioning systems, new stoves use
                        fuzzy logic to determine the current flowing through the
                        elements to not exceed the set temperature and maintain
                        that temperature while cooking since it's important in
                        getting a well cooked food.
                    </p>
                </Explanation>
                <Explanation
                    title="Washing machines"
                    style={{ flexBasis: "45%", flexGrow: "1" }}
                    source="https://www.l-tron.com/fuzzy-logic-in-real-life/"
                >
                    <p>
                        New washing machines use fuzzy logic to determine the
                        amount of water to use during washing based on the
                        weight of the dishes. This way these machines become
                        more power efficient and ultimately do not waste
                        resources.
                    </p>
                </Explanation>
            </TextImage>
        </WhyMain>
    );
};

export default Where;
