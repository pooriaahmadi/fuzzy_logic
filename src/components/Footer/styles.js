import styled from "styled-components";

export const FooterMain = styled.footer`
    width: 100%;
    margin-top: 50px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const Left = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;
    h1 {
        font-weight: bold;
    }
    a {
        text-decoration: none;
        color: #0069ff;
    }
`;

export const Right = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;

        > img {
            width: 30px;
            height: 30px;
        }

        :hover {
            transform: scale(1.1);
        }
    }
`;
