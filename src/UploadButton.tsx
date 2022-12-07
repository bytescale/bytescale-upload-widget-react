import { UploaderInterface, UploadWidgetResult, UploadWidgetConfig } from "uploader";

interface MouseEventLite {
  preventDefault: () => void;
}

interface Props {
  children: (props: { onClick: (event: MouseEventLite) => void }) => JSX.Element;
  onComplete?: (files: UploadWidgetResult[]) => void;
  options?: UploadWidgetConfig;
  uploader: UploaderInterface;
}

export const UploadButton = ({ uploader, options, onComplete, children }: Props): JSX.Element => {
  const onClick = (e: MouseEventLite): void => {
    e.preventDefault();

    uploader.open(options).then(
      files => {
        if (onComplete !== undefined) {
          onComplete(files);
        }
      },
      error => console.error("Uploader error.", error)
    );
  };

  return children({ onClick });
};
