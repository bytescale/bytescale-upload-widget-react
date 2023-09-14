import { useAutoUpdatingOptions } from "@bytescale/upload-widget-react/hooks/UseAutoUpdatingOptions";
import { UploadWidget, UploadWidgetConfig, UploadWidgetResult } from "@bytescale/upload-widget";

interface MouseEventLite {
  preventDefault: () => void;
}

interface Props {
  children: (props: { onClick: (event: MouseEventLite) => void }) => JSX.Element;
  onComplete?: (files: UploadWidgetResult[]) => void;
  options: UploadWidgetConfig;
}

export const UploadButton = ({ options, onComplete, children }: Props): JSX.Element => {
  const autoUpdatingOptions = useAutoUpdatingOptions(options);

  const onClick = (e: MouseEventLite): void => {
    e.preventDefault();

    UploadWidget.open(autoUpdatingOptions).then(
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
