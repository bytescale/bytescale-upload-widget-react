import { UploadButton } from "@bytescale/upload-widget-react/UploadButton";
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";

(global as any).ResizeObserver = require("resize-observer-polyfill");
configure({ adapter: new Adapter() });

describe("UploadButton Component", () => {
  test("Renders the given child", () => {
    act(() => {
      const html = mount(
        <UploadButton options={{ apiKey: "free" }}>
          {({ onClick }) => <button onClick={onClick}>Click Me</button>}
        </UploadButton>
      );
      expect(html.text()).toEqual("Click Me");
    });
  });

  test("Displays the Uploader modal when clicked", async () => {
    await act(async () => {
      const html = mount(
        <div>
          <UploadButton options={{ apiKey: "free", container: "#container" }}>
            {({ onClick }) => <button onClick={onClick}>Click Me</button>}
          </UploadButton>
          <div id="container" />
        </div>,
        { attachTo: document.body }
      );

      html.find("button").simulate("click");

      await tick();

      expect(html.html()).toContain("Upload a File");
    });
  });
});

async function tick(): Promise<void> {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}
