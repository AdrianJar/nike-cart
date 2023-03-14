import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (max-width: 767px) {
        padding-bottom: 125px;
    }
`;

export const Details = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 18px;
`;

export const Img = styled.div`
    width: 74px;
    height: 80px;
    background-color: black;
`;

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OrderName = styled.p`
    margin-top: 0;
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;
`;

export const OrderDetails = styled.p`
    margin-top: 0;
    margin-bottom: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.1;
    color: ${({ theme }) => theme.colors.subHeader};
`;

export const Price = styled.p`
    align-self: flex-end;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.1;
`;