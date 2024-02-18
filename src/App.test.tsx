import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", async () => {
  beforeEach(() => {
    render(<App />);
  })

  it("sould render navigation bar", async () => {
    expect(await screen.queryByText("HOME")).toBeInTheDocument();
    expect(await screen.queryByText("LOGIN / REGISTER")).toBeInTheDocument();
    expect(await screen.queryByText("Loading...")).toBeInTheDocument();
  });

  // TODO wait for layout to load
  it.skip("sould render main menu", async () => {
    expect(await screen.queryByText("RANDOM GAME")).toBeInTheDocument();
    expect(await screen.queryByText("LIST")).toBeInTheDocument();
    expect(await screen.queryByText("PLAYER STATS")).toBeInTheDocument();
    expect(await screen.queryByText("ABOUT")).toBeInTheDocument();
  });
});
