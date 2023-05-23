import { UploaderInterface, UploadWidgetResult, UploadWidgetConfig } from "uploader";
import React, { useLayoutEffect } from "react";
import { useElementRef } from "./hooks/UseElementRef";
import { useAutoUpdatingOptions } from "react-uploader/hooks/UseAutoUpdatingOptions";

interface Props {
  className?: string;
  height?: string;
  minWidth?: string;
  onComplete?: (files: UploadWidgetResult[]) => void;
  onUpdate?: (files: UploadWidgetResult[]) => void;
  options?: UploadWidgetConfig;
  uploader: UploaderInterface;
  width?: string;
}

export const UploadDropzone = ({
  uploader,
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
  const onUpdateParams: UploadWidgetConfig = onUpdate === undefined ? {} : { onUpdate };
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
        uploader.open(autoUpdatingOptions).then(
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
