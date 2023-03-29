import "whatwg-fetch";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { fetch } from "cross-fetch";
import { server } from "./server";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

global.fetch = fetch;

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

afterEach(() => {
  // runs a cleanup after each test case (e.g. clearing jsdom)
  cleanup();
  server.resetHandlers();
});

afterAll(() => server.close());
