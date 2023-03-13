import { AdditionalInfo, DetailWrapper, Price, Total, TotalPrice, Wrapper } from "./styled"

const Summary = () => {
    return (
        <Wrapper>
            <DetailWrapper>
                <AdditionalInfo>Product summary:</AdditionalInfo>
                <Price>$230.00</Price>
                <AdditionalInfo>Cost of delivery:</AdditionalInfo>
                <Price>$0.00</Price>
            </DetailWrapper>
            <DetailWrapper>
                <Total>Total:</Total>
                <TotalPrice>$230.00</TotalPrice>
            </DetailWrapper>
        </Wrapper>
    )
}

export default Summary