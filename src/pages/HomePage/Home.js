
import { Link } from "react-router-dom";
import styled from "styled-components"
import backGround from "../../utils/Images/AppImages/homeBG.jpeg"

const Home = () => {
  return (
    <HomeWrapper>
        <Section>
          <Title>Nvidia Geforce RTX Series</Title>
          <Paragraph>
            Now available for preorder, shipping April, 2022
          </Paragraph>
          <StyledLink to={'/shop'}>Shop Now</StyledLink>
        </Section>
    </HomeWrapper>
  );
};


const HomeWrapper = styled.div`
  min-height: 100vh;
  background: url(${backGround}) no-repeat left top fixed;
  background-size: cover;
  background-position: center center;
  font-family: "Montserrat Bold";
`;

const Section = styled.section`
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 20rem;
  padding-left: 6rem;
  gap: 1rem;
  @media (max-width: 650px) {
    padding-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
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

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export default Home;
