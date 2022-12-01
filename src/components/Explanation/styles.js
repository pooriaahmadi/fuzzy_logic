import styled from "styled-components";

export const ExplanationDiv = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
    height: fit-content;
    flex-grow: 1;
`;

export const Title = styled.div`
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

    > h1 {
        font-size: 28px;
        font-weight: bold;
    }
    > a {
        text-decoration: none;
        padding: 5px 10px;
        color: white;
        background-color: #0069ff;
        cursor: pointer;
        border-radius: 2em;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    > p {
        font-size: 16px;
    }
`;
