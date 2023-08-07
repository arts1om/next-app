import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeRegistry from "../styles/ThemeRegistry";

const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  return (
    <ThemeRegistry options={{ key: "mui-test" }}>{children}</ThemeRegistry>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
