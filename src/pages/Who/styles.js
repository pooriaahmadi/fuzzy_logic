import styled from "styled-components";

export const WhoMain = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 20px;
    flex-direction: column;
`;

export const TextImage = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    > img {
        border-radius: 20px;
        flex-grow: 1;
        height: fit-content;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;
