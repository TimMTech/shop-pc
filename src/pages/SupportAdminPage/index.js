import styled from "styled-components"
import { ChatEngine } from "react-chat-engine"


const SupportAdmin = () => {
    return (
      <SupportAdminWrapper>
        <ChatEngine
          projectID={process.env.REACT_APP_CE_PROJECT_ID}
          userName="Tim"
          userSecret="redcross"
        />
      </SupportAdminWrapper>
    );
}

const SupportAdminWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export default SupportAdmin