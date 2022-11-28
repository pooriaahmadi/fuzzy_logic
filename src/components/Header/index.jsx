import { useLocation } from "react-router-dom";
import { isLinkActive } from "../../utils/urls";
import FuzzyTitle from "../FuzzyTitle";
import HeaderItem from "../HeaderItem";
import { LINKS } from "../Menu";
import { HeaderMain } from "./styles";

const Header = () => {
    const location = useLocation();
    return (
        <HeaderMain>
            {LINKS.map((linkObject, index) => {
                if (parseInt(LINKS.length / 2) === index)
                    return (
                        <>
                            <div>
                                <FuzzyTitle
                                    size={40}
                                    rotationLimit={20}
                                    spaceGap={10}
                                    translationXLimit={0}
                                    translationYLimit={5}
                                >
                                    Fuzzy Logic
                                </FuzzyTitle>
                            </div>
                            <HeaderItem
                                active={isLinkActive({
                                    url: location.pathname,
                                    targetUrl: linkObject.link,
                                })}
                                {...linkObject}
                                key={index}
                            >
                                {linkObject.text}
                            </HeaderItem>
                        </>
                    );

                return (
                    <HeaderItem
                        active={isLinkActive({
                            url: location.pathname,
                            targetUrl: linkObject.link,
                        })}
                        {...linkObject}
                        key={index}
                    >
                        {linkObject.text}
                    </HeaderItem>
                );
            })}
        </HeaderMain>
    );
};

export default Header;
