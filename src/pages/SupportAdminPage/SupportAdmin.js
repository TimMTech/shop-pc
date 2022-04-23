import styled from "styled-components"
import { ChatEngine } from "react-chat-engine"


const SupportAdmin = () => {
    return (
      <SupportAdminWrapper>
        <ChatEngine
          projectID={process.env.REACT_APP_CE_PROJECT_ID}
          userName={process.env.REACT_APP_CE_ADMIN_USERNAME}
          userSecret={process.env.REACT_APP_CE_ADMIN_PASSWORD}
        />
      </SupportAdminWrapper>
    );
}

const SupportAdminWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

export default SupportAdmin