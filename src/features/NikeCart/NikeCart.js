import Buttons from "./Buttons/Buttons";
import Header from "./Header/Header";
import Order from "./Order/Order";
import { Wrapper } from "./styled";
import Summary from "./Summary/Summary";

function NikeCart() {
  return (
    <Wrapper>
      <Header />
      <Order />
      <Summary />
      <Buttons />
    </Wrapper>
  );
}

export default NikeCart;
