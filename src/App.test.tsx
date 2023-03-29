import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("Should show title", () => {
    render(<App />);
    expect(screen.getByText("Spy Grid 007")).toBeDefined();
  });
});
