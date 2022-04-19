
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";
import avatar from "../../../utils/Images/AppImages/avatar.png";

const EmailForm = ({
  loading,
  handleSubmit,
  emailInput,
  handleEmailChange,
  showEmailForm,
}) => {
  return (
    <>
      {showEmailForm && (
        <EmailFormWrapper>
          <LoadingWrapper
            style={{
              zIndex: loading ? "10" : "-1",
              opacity: loading ? "0.33" : "0",
            }}
          >
            <StyledLoadingOutlined
              style={{
                zIndex: loading ? "10" : "-1",
                opacity: loading ? "1" : "0",
              }}
            />
          </LoadingWrapper>
          <StyledEmailForm>
            Welcome To My Support
            <StyledAvatar></StyledAvatar>
            <Greeting>Enter Email To Chat With Tim!</Greeting>
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                onChange={(e) => handleEmailChange(e)}
                type="email"
                value={emailInput.email}
                placeholder="Email"
              />
            </StyledForm>
          </StyledEmailForm>
        </EmailFormWrapper>
      )}
    </>
  );
};

const EmailFormWrapper = styled.div`
  font-family: "Montserrat Bold";
  width: 100%;
  background: linear-gradient(#424242, #000000);
  color: rgb(255, 255, 255);
  height: 100%;
  opacity: 1;
`;

const LoadingWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgb(255, 255, 255);
`;

const StyledLoadingOutlined = styled(LoadingOutlined)`
  color: rgb(192, 1, 1);
  position: absolute;
  top: calc(50% - 51px);
  left: calc(50% - 51px);
  font-weight: 600;
  font-size: 84px;
  top: calc(50% - 41px);
  left: calc(50% - 41px);
`;

const StyledEmailForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  text-align: center;
  padding-top: 1.5rem;
`;

const StyledAvatar = styled.div`
  background-image: url(${avatar});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  border: 0.1rem solid rgb(255, 255, 255);
`;

const Greeting = styled.div`
  font-size: 1.2rem;
`;

const StyledForm = styled.form``;

const StyledInput = styled.input`
  font-family: "Montserrat Medium";
  width: 100%;
  padding: 0.5rem 0.5rem;
  border: 0.1rem solid rgb(0, 0, 0);
  cursor: default;
`;

export default EmailForm;
