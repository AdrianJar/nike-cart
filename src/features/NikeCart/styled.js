import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.boxBackground};
    max-width: 540px;
    margin: 150px auto;
    padding: 50px;
    border-radius: 30px;

    @media (max-width: 767px){
        padding: 24px;
    }
`