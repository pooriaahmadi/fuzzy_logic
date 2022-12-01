import styled from "styled-components";

export const WhatMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
`;

export const QuestionDiv = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

export const Logics = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`;

export const Logic = styled.div`
    flex-basis: 400px;
    flex-grow: 1;
    border-radius: 20px;
    background-color: white;
    padding: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    display: flex;
    flex-direction: column;
    height: fit-content;
`;

export const LogicTitle = styled.h3`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
`;
