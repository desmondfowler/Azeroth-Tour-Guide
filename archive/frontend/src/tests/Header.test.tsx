// frontend/src/tests/Header.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import RandomRegionButton from "../components/RandomRegionButton";
import { vi } from "vitest";

// Mock the RandomRegionButton component since we’re not testing it here
vi.mock("../components/RandomRegionButton", () => ({
  default: () => (
    <button data-testid="mock-random-region">Random Region</button>
  ),
}));

describe("Header Component", () => {
  // Test 1: Check basic rendering (logo and desktop nav)
  it("renders the logo and desktop navigation links", () => {
    render(<Header />);

    // Logo
    const logo = screen.getByAltText("Azeroth Tour Guide logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/atg-logo.webp");

    // Desktop navigation links (hidden on mobile, visible on desktop)
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Azeroth")).toBeInTheDocument();
    expect(screen.getByText("Region Directory")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();

    // RandomRegionButton (mocked)
    expect(screen.getByTestId("mock-random-region")).toBeInTheDocument();
  });

  // Test 2: Mobile menu button exists and is initially closed
  it("renders the mobile menu toggle button and hides the mobile menu initially", () => {
    render(<Header />);

    // Mobile menu button
    const toggleButton = screen.getByLabelText("Toggle menu");
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    // Mobile menu should not be visible initially
    const mobileHomeLink = screen.queryByText("Home", {
      selector: ".sm\\:hidden a",
    });
    expect(mobileHomeLink).not.toBeInTheDocument();
  });

  // Test 3: Mobile menu opens when toggle is clicked
  it("shows the mobile menu when the toggle button is clicked", () => {
    render(<Header />);

    // Find and click the toggle button
    const toggleButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleButton);

    // Check aria-expanded updates
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");

    // Mobile menu links should now be visible
    const mobileHomeLink = screen.getByText("Home", {
      selector: ".sm\\:hidden a",
    });
    expect(mobileHomeLink).toBeInTheDocument();
    expect(
      screen.getByText("Azeroth", { selector: ".sm\\:hidden a" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Region Directory", { selector: ".sm\\:hidden a" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Contact", { selector: ".sm\\:hidden a" })
    ).toBeInTheDocument();

    // RandomRegionButton in mobile menu
    const mobileRandomButton = screen.getAllByTestId("mock-random-region")[1]; // Second instance (mobile)
    expect(mobileRandomButton).toBeInTheDocument();
  });

  // Test 4: Mobile menu closes when toggle is clicked again
  it("hides the mobile menu when the toggle button is clicked twice", () => {
    render(<Header />);

    const toggleButton = screen.getByLabelText("Toggle menu");

    // Open the menu
    fireEvent.click(toggleButton);
    expect(
      screen.getByText("Home", { selector: ".sm\\:hidden a" })
    ).toBeInTheDocument();

    // Close the menu
    fireEvent.click(toggleButton);
    expect(
      screen.queryByText("Home", { selector: ".sm\\:hidden a" })
    ).not.toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });
});
