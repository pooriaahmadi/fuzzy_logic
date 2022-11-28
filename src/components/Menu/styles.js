import styled from "styled-components";

export const MenuDiv = styled.div`
    transform: translateX(${(props) => (props.active ? 0 : 80)}px);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    gap: 10px;
    transition: 0.5s;
    :hover {
        transform: translateX(0px);
    }
`;
