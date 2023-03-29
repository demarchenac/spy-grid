import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpyMetadata } from "./SpyMetadata";

interface IMock {
  testName: string;
  props: {
    title: string;
    value: string;
    type?: "text" | "color";
  };
}

const mocks: IMock[] = [
  {
    testName: "Should render a SpyMetadata with a text value",
    props: {
      title: "title",
      value: "value",
    },
  },
  {
    testName: "Should render a SpyMetadata with a color value",
    props: {
      title: "title",
      value: "bg-indigo-600",
      type: "color",
    },
  },
];

describe("<SpyMetadata />", () => {
  mocks.forEach(({ testName, props }) => {
    test(testName, () => {
      render(<SpyMetadata {...props} />);
      expect(screen.getByText(new RegExp(props.title, "i"))).toBeDefined();
      if (props?.type === "color") {
        expect(
          screen.getByTitle(new RegExp(props.value.split("-")[1], "i"))
        ).toBeDefined();
      } else {
        expect(screen.getByText(new RegExp(props.value, "i"))).toBeDefined();
      }
    });
  });
});
