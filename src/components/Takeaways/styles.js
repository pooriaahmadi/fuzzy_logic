import styled, { css } from "styled-components";

export const TakeawayDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 350px;
    ${(props) =>
        props.active
            ? css`
                  bottom: 0;
              `
            : css`
                  top: calc(100% - 60px);
              `}
    right: 0;
    z-index: 20;
    transition: 0.5s;
`;

export const TakeawayInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
`;

export const Cat = styled.img`
    width: 170px;
    height: auto;
    position: absolute;
    top: -105px;
    right: 20px;
`;

export const ContentWrapper = styled.div`
    position: relative;
    cursor: pointer;
    background-color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100%;
    display: flex;
    padding: 15px;
    flex-direction: column;
    border-radius: 10px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
    > h1 {
        font-size: 18px;
    }
    > img {
        transform: rotate(${(props) => (props.active ? 0 : 180)}deg);
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    > p {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #0069ff;
        color: white;
        padding: 10px;
        border-radius: 10px;
        font-size: 16px;
    }
`;
