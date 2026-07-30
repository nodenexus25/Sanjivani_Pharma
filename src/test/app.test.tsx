import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { MemoryRouter } from "react-router-dom";
import Home from "@/pages/Home";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ContactForm } from "@/components/contact/ContactForm";

describe("Sanjivani Pharma website", () => {
  it("renders the homepage with product content", () => {
    const view = render(
      <MemoryRouter>
        <SiteLayout>
          <Home />
        </SiteLayout>
      </MemoryRouter>,
    );

    expect(
      view.getByRole("heading", {
        name: /trusted sanitizer manufacturing for institutions, trade buyers, and daily hygiene use/i,
      }),
    ).toBeTruthy();
    expect(view.getByRole("heading", { name: /sanjivani hand sanitizer/i })).toBeTruthy();
    expect(view.getByRole("heading", { name: /^paracetamol$/i })).toBeTruthy();
  });

  it("validates required fields in the contact form", () => {
    const view = render(<ContactForm />);

    fireEvent.submit(view.container.querySelector("form") as HTMLFormElement);

    expect(view.getByText(/please complete the required fields/i)).toBeTruthy();
  });
});
