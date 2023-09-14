import React, { useLayoutEffect } from "react";
import { useElementRef } from "./hooks/UseElementRef";
import { useAutoUpdatingOptions } from "@bytescale/upload-widget-react/hooks/UseAutoUpdatingOptions";
import { UploadWidget, UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

interface Props {
  className?: string;
  height?: string;
  minWidth?: string;
  onComplete?: (files: UploadWidgetResult[]) => void;
  onUpdate?: (files: UploadWidgetResult[]) => void;
  options: UploadWidgetConfig;
  width?: string;
}

export const UploadDropzone = ({
  options,
  onComplete,
  onUpdate,
  minWidth,
  width,
  height,
  className
}: Props): JSX.Element => {
  const [element, elementRef] = useElementRef();
  const classNameProp = className === undefined ? {} : { className };
  const onUpdateParams: Partial<UploadWidgetConfig> = onUpdate === undefined ? {} : { onUpdate };
  const autoUpdatingOptions = useAutoUpdatingOptions({
    ...options,
    ...onUpdateParams,
    layout: "inline",
    container: element
  });

  // Prevent React warning, while keeping rendering synchronous in the browser.
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (element !== undefined) {
        UploadWidget.open(autoUpdatingOptions).then(
          files => {
            if (onComplete !== undefined) {
              onComplete(files);
            }
          },
          error => console.error("Uploader error.", error)
        );
      }
    }, [element]);
  }

  return (
    <div
      {...classNameProp}
      ref={elementRef}
      style={{
        position: "relative",
        width: "100%",
        minWidth: minWidth ?? "280px",
        maxWidth: width ?? "600px",
        height: height ?? "375px"
      }}
    />
  );
};
