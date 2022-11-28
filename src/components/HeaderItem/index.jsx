import { HeaderItemMain } from "./styles";

const HeaderItem = ({ active, children, link, color }) => {
    return (
        <HeaderItemMain to={link} active={active} color={color}>
            {children}
        </HeaderItemMain>
    );
};

export default HeaderItem;
