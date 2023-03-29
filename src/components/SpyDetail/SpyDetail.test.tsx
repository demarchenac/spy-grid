import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpyDetail } from ".";

const mockRandomUser = {
  firstName: "Marion",
  lastName: "Walters",
  username: "greengoose570",
  city: "Perth",
  state: "Tasmania",
  country: "Australia",
  gender: "male",
  dob: new Date("1972-07-30T23:22:45.932Z"),
  eyeColor: "bg-cyan-400",
  timezone: {
    offset: "-5:00",
    description: "Eastern Time (US & Canada), Bogota, Lima",
  },
  largePhoto: "https://randomuser.me/api/portraits/men/28.jpg",
};

const refetch = vi.fn(() => {});

describe("<SpyDetail />", () => {
  beforeEach(() => {
    render(<SpyDetail spy={mockRandomUser} refetch={refetch} />);
  });
  test("Should render firstName", () => {
    expect(screen.getByText(mockRandomUser.firstName)).toBeDefined();
  });
  test("Should render lastName", () => {
    expect(screen.getByText(mockRandomUser.lastName)).toBeDefined();
  });
  test("Should render city", () => {
    expect(screen.getByText(mockRandomUser.city)).toBeDefined();
  });
  test("Should render state", () => {
    expect(screen.getByText(mockRandomUser.state)).toBeDefined();
  });
  test("Should render country", () => {
    expect(screen.getByText(mockRandomUser.country)).toBeDefined();
  });
  test("Should render gender", () => {
    expect(screen.getByText(mockRandomUser.gender)).toBeDefined();
  });
  test("Should render dob", () => {
    expect(
      screen.getByText(mockRandomUser.dob.toLocaleDateString())
    ).toBeDefined();
  });
  test("Should render eyeColor", () => {
    expect(
      screen.getByTitle(mockRandomUser.eyeColor.split("-")[1])
    ).toBeDefined();
  });
  test("Should render timezone", () => {
    expect(screen.getByText(mockRandomUser.timezone.offset)).toBeDefined();
  });
  test("Should render description", () => {
    expect(screen.getByText(mockRandomUser.timezone.description)).toBeDefined();
  });
  test("Should render largePhoto", () => {
    const codenameRegex = new RegExp(`${mockRandomUser.username}'s photo`);
    expect(screen.getByTitle(codenameRegex)).toBeDefined();
    expect(screen.getByAltText(codenameRegex)).toBeDefined();
  });
  test("refetch should be called on New Asset", () => {
    screen.getByText("Next Asset").click();
    expect(refetch).toHaveBeenCalled();
    expect(refetch).toHaveBeenCalledOnce();
  });
});
