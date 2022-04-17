
import ShopItem from "../ShopItem";
import styled from "styled-components";

const Content = ({ product }) => {
  const displayItems = product.map((data) => (
    <ShopItem key={data.productId} product={data} />
  ));

  return (
    <ContentWrapper>
      {displayItems}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  height: 25rem;
  flex-wrap: wrap;
  gap: 3rem;
  padding-top: 11rem;
  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 0;
    gap: 11rem;
  }
`;

export default Content;
