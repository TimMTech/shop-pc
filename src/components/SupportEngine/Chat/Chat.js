
import { ChatEngineWrapper, Socket, ChatFeed } from "react-chat-engine";
import styled from "styled-components"

const Chat = ({ showChat, visible , user, chat }) => {
  return (
    <ChatWrapper
      style={{
        height: visible ? "100%" : "0px",
        zIndex: visible ? "100" : "0",
      }}
    >
      {showChat && (
        <ChatEngineWrapper>
          <Socket
            projectID={process.env.REACT_APP_CE_PROJECT_ID}
            userName={user.email}
            userSecret={user.email}
          />
          <ChatFeed activeChat={chat.id} />
        </ChatEngineWrapper>
      )}
    </ChatWrapper>
  );
};

const ChatWrapper = styled.div`
  transition: all 0.33s ease;
  -webkit-transition: all 0.33s ease;
  -moz-transition: all 0.33s ease;
`;

export default Chat;
