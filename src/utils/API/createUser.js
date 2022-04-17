import axios from "axios";

const createUser = (email, callBack) => {
   axios
    .put(
      "https://api.chatengine.io/users/",
      {
        "username": email,
        "secret": email,
        "email": email,
      },
      { headers: { "Private-Key": process.env.REACT_APP_CE_PRIVATE_KEY } }
    )
    .then((r) => callBack(r.data))
    .catch(error => {
        console.error('there was an error', error)
    })
};

export default createUser