import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders 'Hello World' as a text", () => {
    //Arrange:
    render(<Greeting />);

    //Act
    //nothing..

    //Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });
  //////SECOND TEST/////

  test("renders 'It's good to see you' if the button changeText was NOT clicked", () => {
    render(<Greeting />);
    //Act
    //nothing..
    const noneClickedPElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(noneClickedPElement).toBeInTheDocument();
  });
  //////THIRD TEST/////

  test("renders 'It's nice to meet you' if the button changeText was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const changeButtonEl = screen.getByRole("button"); // YOU CAN ALSO getByText("text")
    userEvent.click(changeButtonEl);

    //Assert
    const changedTextEl = screen.getByText("It's nice to meet you", {
      exact: false,
    });
    expect(changedTextEl).toBeInTheDocument();
  });

  ////Fourth test/////

  test("Does NOT renders 'It's good to see you' if the button changeText was clicked", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const changeButtonEl = screen.getByRole("button");
    userEvent.click(changeButtonEl);

    //Assert
    const changedTextEl = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(changedTextEl).toBeNull();
  });
});
