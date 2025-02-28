import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
    test("renders correctly",()=>{
        render(<Application />);
        const pageHeading = screen.getByRole("heading",{
            level:1,
        })
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading  = screen.getByRole("heading",{
          level:2,
        })
        expect(sectionHeading).toBeInTheDocument();

        const paraElement = screen.getByText("All fields are mandatory")
        expect(paraElement).toBeInTheDocument();

        const titleElement = screen.getByTitle("close")
        expect(titleElement).toBeInTheDocument();

        const imageElement = screen.getByAltText("a person with a laptop")
        expect(imageElement).toBeInTheDocument();

        const customElement = screen.getByTestId("custom-element")
        expect(customElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox",{
            name:"Name",
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name")
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText("Fullname")
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue("Vyshnav")
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox",{
            name:"Bio"
        })
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termElement = screen.getByRole("checkbox");
        expect(termElement).toBeInTheDocument();

        const submitElement = screen.getByRole("button");
        expect(submitElement).toBeInTheDocument();
    })
})
