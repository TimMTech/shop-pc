
import EmailForm from "../EmailForm";
import Chat from "../Chat";
import { useState } from "react";
import createUser from "../../../utils/API/createUser"
import createChat from "../../../utils/API/createChat"
import styled from "styled-components"

const SupportWindow = ({ visible }) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);
  const [loading, setLoading] = useState(false)
  
  const [feed, setFeed] = useState({
    showChat: false,
    showEmailForm: true
  })
  
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    createUser(email,
      user => {
        setUser(user)
        createChat(email,
          chat => setChat(chat)
        )
      }
    )
    
    setTimeout(() => {
      setLoading(false)
      setFeed({...feed, 
        showChat: true,
        showEmailForm: false}
      )
    }, 7000)
  };



  return (
    <SupportWindowWrapper
      style={{ opacity: visible ? "1" : "0",
            visibility : visible ? "visible" : "hidden"}}
    >
      <EmailForm
        handleSubmit={handleSubmit}
        emailInput={email}
        handleEmailChange={handleEmailChange}
        loading={loading}
        showEmailForm={feed.showEmailForm}
      />
      <Chat
        showChat={feed.showChat}
        chat={chat}
        user={user}
        visible={feed.showChat}
      />
    </SupportWindowWrapper>
  );
};

const SupportWindowWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  position: fixed;
  bottom: 8.2rem;
  right: 3rem;
  width: 18rem;
  height: 23rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 0.2rem solid rgb(255, 255, 255);
  cursor: default;
  transition: all 0.33s ease;
  -webkit-transition: all 0.33s ease;
  -moz-transition: all 0.33s ease;
`;

export default SupportWindow;
