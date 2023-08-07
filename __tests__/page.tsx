import Home from "../src/app/page";
import { render } from "../src/utils/test-utils";

test("renders a heading", () => {
  const { container } = render(<Home />);

  const heading = container.querySelector("h2");

  expect(heading?.textContent).toBe("Home Page");
});
