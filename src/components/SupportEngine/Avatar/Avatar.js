
import { useState } from "react";
import styled from "styled-components";
import avatar from "../../../utils/Images/AppImages/avatar.png";

const Avatar = ({ handleVisible }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <AvatarWrapper>
      <Greeting style={{ opacity: hovered ? "1" : "0" }}>
        Hey It's Tim!!
      </Greeting>
      <StyledAvatar
        onClick={handleVisible}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          border: hovered ? "0.1rem solid white" : "0.1rem solid black",
        }}
      />
    </AvatarWrapper>
  );
};

const AvatarWrapper = styled.div`
  color: rgb(255, 255, 255);
  font-family: "Montserrat Medium";
  font-size: 0.9rem;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
`;

const Greeting = styled.div`
  cursor: default;
  position: absolute;
  left: calc(-100% - 32px - 28px);
  top: calc(50% - 32px);
  z-index: 10000;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  border-radius: 2rem;
  background-color: #f9f0ff;
  color: rgb(0, 0, 0);
  transition: all 0.33s ease;
  -webkit-transition: all 0.33s ease;
  -moz-transition: all 0.33s ease;
`;

const StyledAvatar = styled.div`
  background-image: url(${avatar});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  transition: all 0.33s ease;
  -webkit-transition: all 0.33s ease;
  -moz-transition: all 0.33s ease;
`;

export default Avatar;
