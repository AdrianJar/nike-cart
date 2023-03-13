import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 24px;
`;

export const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 14px;
    margin: 24px 0 ;
`;


export const AdditionalInfo = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.subHeader};
    margin: 0;
`;

export const Price = styled.p`
    display: flex;
    justify-content: flex-end;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.1;
    margin: 0;
`;

export const Total = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.1;
    margin: 0;
`;

export const TotalPrice = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.1;
    margin: 0;
`;