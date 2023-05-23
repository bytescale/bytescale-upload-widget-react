import { UploaderInterface, UploadWidgetResult, UploadWidgetConfig } from "uploader";
import { useAutoUpdatingOptions } from "react-uploader/hooks/UseAutoUpdatingOptions";

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
  const autoUpdatingOptions = useAutoUpdatingOptions(options);

  const onClick = (e: MouseEventLite): void => {
    e.preventDefault();

    uploader.open(autoUpdatingOptions).then(
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
