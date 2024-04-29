import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);
    const listItemsElements = await screen.findAllByRole("listitem"); // find is a promise not get
    expect(listItemsElements).not.toHaveLength(0);
  });
});
