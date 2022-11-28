import styled from "styled-components";

export const HomeDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    > h2 {
        font-size: 24px;
        font-weight: normal;
        padding-top: 17px;
        > a {
            color: #0069ff;
            text-decoration: none;
        }
    }
`;

export const CustomFuzzy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;
