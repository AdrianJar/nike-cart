import { Details, OrderDetails, OrderName, Img, OrderInfo, Price, Wrapper } from "./styled"

const Order = () => {
    return (
        <Wrapper>
            <Details>
                <Img />
                <OrderInfo>
                    <OrderName>Nike Sportswear Tech Fleece Windrunner</OrderName>
                    <OrderDetails>Man's Full-Zip Hoodie</OrderDetails>
                    <OrderDetails>Size: M</OrderDetails>
                </OrderInfo>
                <Price>$120.00</Price>
            </Details>
            <Details>
                <Img />
                <OrderInfo>
                    <OrderName>Nike Air Force 1 '07</OrderName>
                    <OrderDetails>Men's Shoes</OrderDetails>
                    <OrderDetails>Size: 43</OrderDetails>
                </OrderInfo>
                <Price>$110.00</Price>
            </Details>
        </Wrapper>
    )
}

export default Order