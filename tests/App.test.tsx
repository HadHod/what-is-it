import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";

describe("App", async () => {
  beforeEach(() => {
    render(<App />);
  })

  it("should render navigation bar", async () => {
    expect(await screen.queryByText("HOME")).toBeInTheDocument();
    expect(await screen.queryByText("LOGIN / REGISTER")).toBeInTheDocument();
    expect(await screen.queryByText("Loading...")).toBeInTheDocument();
  });

  it("should render main menu", async () => {
    expect(await waitFor(() => screen.getByText("RANDOM GAME"))).toBeInTheDocument();
    expect(await waitFor(() => screen.getByText("LIST"))).toBeInTheDocument();
    expect(await waitFor(() => screen.getByText("PLAYER STATS"))).toBeInTheDocument();
    expect(await waitFor(() => screen.getByText("ABOUT"))).toBeInTheDocument();
  });
});
