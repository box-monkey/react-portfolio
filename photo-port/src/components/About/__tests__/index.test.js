import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("about component", () => {
  // first test
  it("renders", () => {
    render(<About />);
  });
  // second test
  it("matches dom snap", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  })
});
