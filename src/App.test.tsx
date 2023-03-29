import { describe, expect, test } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { mocks, seeds } from "./tests/seeds";

describe("<App />", () => {
  test("Should show title", () => {
    render(<App />);
    expect(screen.getByText("Spy Grid 007")).toBeDefined();
  });
});

describe("<App /> + seeds", () => {
  test("Should render loading spinner", () => {
    render(<App seeds={seeds} />);
    expect(screen.getByRole("status")).toBeDefined();
  });

  seeds.forEach(async (seed) => {
    describe(`Should render seed: ${seed}`, () => {
      const randomUser = mocks[seed];

      beforeEach(async () => {
        let clicks = seeds.indexOf(seed);
        render(<App seeds={seeds} />);
        await waitForElementToBeRemoved(() => screen.getByRole("status"));

        while (clicks > 0) {
          expect(screen.getByText(/next asset/i)).toBeInTheDocument();
          await userEvent.click(screen.getByText(/next asset/i));
          clicks = clicks - 1;
        }
      });

      test("Should render firstName", () => {
        expect(screen.getByText(randomUser.firstName)).toBeDefined();
      });
      test("Should render lastName", () => {
        expect(screen.getByText(randomUser.lastName)).toBeDefined();
      });
      test("Should render city", () => {
        expect(screen.getByText(randomUser.city)).toBeDefined();
      });
      test("Should render state", () => {
        expect(screen.getByText(randomUser.state)).toBeDefined();
      });
      test("Should render country", () => {
        expect(screen.getByText(randomUser.country)).toBeDefined();
      });
      test("Should render gender", () => {
        expect(screen.getByText(randomUser.gender)).toBeDefined();
      });
      test("Should render dob", () => {
        expect(
          screen.getByText(randomUser.dob.toLocaleDateString())
        ).toBeDefined();
      });
      test("Should render timezone", () => {
        expect(screen.getByText(randomUser.timezone.offset)).toBeDefined();
      });
      test("Should render description", () => {
        expect(screen.getByText(randomUser.timezone.description)).toBeDefined();
      });
      test("Should render largePhoto", () => {
        const codenameRegex = new RegExp(`${randomUser.username}'s photo`);
        expect(screen.getByTitle(codenameRegex)).toBeDefined();
        expect(screen.getByAltText(codenameRegex)).toBeDefined();
      });
    });
  });
});
