
import styled from "styled-components";

const ShopNav = ({
  searchedProduct,
  handleChassis,
  handleMemory,
  handleMotherBoard,
  handleProccessor,
  handleVideoCard,
}) => {
  return (
    <ShopNavWrapper>
      <ShopTitle>
        <Small>Shop /</Small>
        <Paragraph>{searchedProduct}</Paragraph>
      </ShopTitle>
      <Button onClick={(e) => handleChassis(e)}>Chassis</Button>
      <Button onClick={(e) => handleMemory(e)}>Memory</Button>
      <Button onClick={(e) => handleMotherBoard(e)}>Mother Board</Button>
      <Button onClick={(e) => handleProccessor(e)}>Processor</Button>
      <Button onClick={(e) => handleVideoCard(e)}>Video Card</Button>
    </ShopNavWrapper>
  );
};

const ShopNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  padding-top: 15rem;
  padding-left: 5rem;
  font-family: "Montserrat ExtraLight";
  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    padding-top: 20rem;
  })
`;

const ShopTitle = styled.h1`

`;

const Small = styled.small`
  font-size: 1rem;
`;

const Paragraph = styled.p`
  
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 1s;
  text-decoration: none;
  color: rgb(0, 0, 0);
  border-radius: 1rem;
  background: rgb(255, 255, 255);
  border: none;
  font-family: "Montserrat Bold";
`;

export default ShopNav;
