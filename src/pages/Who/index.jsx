import Explanation from "../../components/Explanation";
import { TextImage, WhoMain } from "./styles";
import pensive from "../../images/pensive.png";

const Who = () => {
    return (
        <WhoMain>
            <Explanation
                title="Who came up with Fuzzy Logic?"
                source="https://www.investopedia.com/terms/f/fuzzy-logic.asp"
            >
                <p>
                    Lotfi Zadeh first proposed fuzzy logic in a 1965 paper for
                    the journal Information and Control. In his study “Fuzzy
                    Sets,” Lotfi Zadeh aimed to represent the type of data
                    utilised in information processing and derived the essential
                    logical principles for this type of set. “Most of the time,
                    the classes of items met in the real physical world do not
                    have well specified membership requirements,” Zadeh added.
                    “Yet, the reality remains that such imprecisely defined
                    ‘classes’ play a significant role in human thinking,
                    particularly in the realms of pattern identification,
                    information transfer, and abstraction.”
                </p>
                <p>
                    Fuzzy logic has been successfully utilised in machine
                    control systems, image processing, artificial intelligence,
                    and other activities that rely on inputs with vague
                    meanings.
                </p>
            </Explanation>
            <TextImage>
                <Explanation
                    title="Who is Lotfi Aliasker Zadeh?"
                    style={{ flexBasis: "30%", flexGrow: "1" }}
                    source="https://www.newyorker.com/tech/annals-of-technology/remembering-lotfi-zadeh-the-inventor-of-fuzzy-logic"
                >
                    <p>
                        Zadeh was born in Baku, Azerbaijan. When he was ten
                        years old, he and his family relocated to Tehran where
                        he attended the missionary school American College. He
                        began to appreciate American values and the country as a
                        whole because his teachers were Midwest Presbyterians.
                        Following his 1942 electrical engineering graduation
                        from the University of Tehran, he enrolled at MIT.
                        Throughout his life, he attended numerous universities,
                        but ultimately chose to continue his studies at the
                        University of California. Lotfi was not an ordinary
                        person, his dreams were ambitious and yet he managed to
                        achieve them. Lotfi Zadeh had to convince many
                        professors and teachers that fuzzy logic is the more
                        convenient path to solve everyday problems, and in doing
                        that, he made many connections and friends that would
                        help him later on in his life. Sadly, he passed away in
                        Berkeley on September 6, 2017.
                    </p>
                </Explanation>
                <img style={{ width: "500px" }} src={pensive} />
            </TextImage>
        </WhoMain>
    );
};

export default Who;
