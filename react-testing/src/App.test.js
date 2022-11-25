import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App';

describe("App component", () =>{
  it("renders correct heading", () => {
    const {getByRole} = render(<App />);
    expect(getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
