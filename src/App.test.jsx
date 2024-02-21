import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import App from "./App";

describe("App page", () => {
  it("renders App page and get title text", () => {
    render(<App />);
    expect(screen.getByText("Main PS")).toBeInTheDocument();
  });

  it("renders App page and click button", () => {
    render(<App />);

    const buttonText = screen.getByText("Mau main!");
    expect(buttonText).toBeInTheDocument();

    const logSpy = vi.spyOn(console, "log");
    fireEvent.click(buttonText);
    expect(logSpy).toHaveBeenCalledWith("testing");
  });

  it("renders App page, click suka button then get the new text", () => {
    render(<App />);

    const sukaButton = screen.getByText("Suka gak?");
    expect(sukaButton).toBeInTheDocument();

    let sukaText = screen.getByText("gak suka");
    expect(sukaText).toBeInTheDocument();

    let newSukaText = screen.queryByText("suka dong");
    expect(newSukaText).not.toBeInTheDocument();

    fireEvent.click(sukaButton);

    newSukaText = screen.getByText("suka dong");
    expect(newSukaText).toBeInTheDocument();

    sukaText = screen.queryByText("gak suka");
    expect(sukaText).not.toBeInTheDocument();
  });
});
