import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ShopCart from "../../components/ShopCart/ShopCart";

test("if cart length is 0, render empty cart", () => {
  const items = [];
  const cartLength = [];

  render(
    <ShopCart
      items={items}
      cartContent={cartLength}
      closeCart={() => console.log("close")}
      totalPrice={0}
      showCart={() => console.log("showcart")}
      updateQuantity={() => console.log("update")}
    />,
    { wrapper: MemoryRouter }
  );

  expect(screen.getByTestId("Empty Cart")).toHaveTextContent(
    "Your Bag Is Empty"
  );
});
