import { Uploader, UploaderResult, UploaderOptions } from "uploader";
import React, { useLayoutEffect, useState } from "react";
import { useElementRef } from "react-uploader/Utils";

interface Props {
  height?: string;
  onComplete?: (files: UploaderResult[]) => void;
  onUpdate?: (files: UploaderResult[]) => void;
  options?: UploaderOptions;
  uploader: Uploader;
  width?: string;
}

const UploadDropzoneInner = ({ uploader, options, onComplete, onUpdate, width, height }: Props): JSX.Element => {
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

// We use 'JSON.stringify(props.options)' to force a reinitialization when options like colour and tags change.
// Unfortunately this won't trigger a re-render in the event of a callback changing.
// JSON.stringify will simply elide non-serializable fields like functions.
export const UploadDropzone = (props: Props): JSX.Element => {
  const [id] = useState(Math.random().toString());
  return <UploadDropzoneInner {...props} key={`${id}-${JSON.stringify(props.options)}`} />;
};
