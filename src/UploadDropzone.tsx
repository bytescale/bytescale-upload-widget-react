import { UploaderInterface, UploadWidgetResult, UploadWidgetConfig } from "uploader";
import React, { useLayoutEffect } from "react";
import { useElementRef } from "./Utils";

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

  // Prevent React warning, while keeping rendering synchronous in the browser.
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (element !== undefined) {
        const onUpdateParams: UploadWidgetConfig = onUpdate === undefined ? {} : { onUpdate };

        uploader
          .open({
            ...options,
            ...onUpdateParams,
            container: element,
            layout: "inline"
          })
          .then(
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
