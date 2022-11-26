import { Link } from "react-router-dom";
import { MenuLink } from "./styles";

const MenuItem = ({ color, children, link, id, currentId, setId }) => {
    const handleClick = () => {
        setId(id);
    };

    return (
        // <Link to={link}>
        <MenuLink
            onClick={handleClick}
            selected={id === currentId}
            color={color}
        >
            <p>{children}</p>
        </MenuLink>
        // </Link>
    );
};

export default MenuItem;
