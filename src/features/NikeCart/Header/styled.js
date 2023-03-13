import styled from "styled-components";

export const Wrapper = styled.div`
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    line-height: 1.1;
    font-style: normal;
    margin-top: 0;
    margin-bottom: 6px;
`;

export const SubHeader = styled.p`
    color: ${({ theme }) => theme.colors.subHeader};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.1;
    margin: 0;
`