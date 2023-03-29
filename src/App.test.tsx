import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App test", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Should show title", () => {
    expect(screen.getByText("App Page!")).toBeDefined();
  });

  test("Should show paragraph", () => {
    expect(
      // showcase of how versatile is the getByText matcher
      screen.getByText((content: string, element) => {
        const copy = "Edit src/App.tsx and save to test HMR";
        const contentIncludesText = content.includes(copy);
        if (!element) {
          // if theres no element we return the copy
          return contentIncludesText;
        }

        const childElementsContent = Array.from(element.childNodes)
          .map((el) => (el.textContent ?? "").trim())
          .filter((text) => text.length > 0);

        if (childElementsContent.length !== 3) {
          // we know that the p node has 3 childs:
          return contentIncludesText;
        }

        const containsText = childElementsContent.join(" ").includes(copy);

        return containsText;
      })
    ).toBeDefined();
  });
});
