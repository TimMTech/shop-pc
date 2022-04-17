import axios from "axios";

const createChat = (email, callBack) => {
  axios
    .put(
      "https://api.chatengine.io/chats/",
      {
        usernames: ["Tim", email],
        is_direct_chat: true,
      },
      {
        headers: {
          "Project-ID": process.env.REACT_APP_CE_PROJECT_ID,
          "User-Name": email,
          "User-Secret": email,
        },
      }
    )
    .then((r) => callBack(r.data))
    .catch((error) => {
      console.error("there was an error", error);
    });
};

export default createChat;
