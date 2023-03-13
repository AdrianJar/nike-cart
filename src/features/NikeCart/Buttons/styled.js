import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 50px;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    max-width: 440px;
    width: 100%;
    padding: 18px;
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.boxBackground};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.1;
    border-radius: 60px;

    ${({ cancel }) => cancel && css`
        background-color: ${({ theme }) => theme.colors.boxBackground};
        color: ${({ theme }) => theme.colors.subHeader};
        font-weight: 400;
        border: 1px solid ${({theme}) => theme.colors.border};
    `}
`;