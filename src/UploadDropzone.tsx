import { UploaderInterface, UploaderResult, UploaderOptions } from "uploader";
import React, { useLayoutEffect } from "react";
import { useElementRef } from "react-uploader/Utils";

interface Props {
  height?: string;
  onComplete?: (files: UploaderResult[]) => void;
  onUpdate?: (files: UploaderResult[]) => void;
  options?: UploaderOptions;
  uploader: UploaderInterface;
  width?: string;
}

export const UploadDropzone = ({ uploader, options, onComplete, onUpdate, width, height }: Props): JSX.Element => {
  const [element, elementRef] = useElementRef();

  useLayoutEffect(() => {
    if (element !== undefined) {
      const onUpdateParams: UploaderOptions = onUpdate === undefined ? {} : { onUpdate };

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

  return (
    <div
      ref={elementRef}
      style={{ position: "relative", width: "100%", maxWidth: width ?? "600px", height: height ?? "375px" }}
    />
  );
};
