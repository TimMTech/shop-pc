import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EmailForm from "../../components/SupportEngine/EmailForm/EmailForm.js";
import * as APITestUser from "../API/createUser.js";
import * as APITestChat from "../API/createChat.js"

jest.mock("../API/createChat")
jest.mock("../API/createUser")
APITestUser.createUser = jest.fn();
APITestChat.createChat = jest.fn();

test("testing axios call for user",  () => {
  const email = "Test User";
  const loading = false;
  const showEmailForm = true;
 
  render(
    <EmailForm
      loading={loading}
      handleSubmit={APITestUser.createUser}
      emailInput={email}
      handleEmailChange={email}
      showEmailForm={showEmailForm}
    /> 
  );
  const form = screen.getByTestId('Submit Form')
 
  fireEvent.submit(form, {
    target: {
      values: {
        email: email
      }
    }
  })

  expect(APITestUser.createUser).toHaveBeenCalledTimes(1)
 
});


test("testing axios call for chat", () => {
    const userNames = ["Test User One", "Test User Two"]
    const loading = false;
    const showEmailForm = true;

    render(
      <EmailForm
        loading={loading}
        handleSubmit={APITestChat.createChat}
        emailInput={userNames[1]}
        handleEmailChange={userNames[1]}
        showEmailForm={showEmailForm}
      />
    );

    const form = screen.getByTestId("Submit Form")

    fireEvent.submit(form, {
      target: {
        values: {
          userNames : userNames
        }
      }
    })

    expect(APITestChat.createChat).toHaveBeenCalledTimes(1) 
})
