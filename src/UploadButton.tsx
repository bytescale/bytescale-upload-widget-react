import { useAutoUpdatingOptions } from "@bytescale/upload-widget-react/hooks/UseAutoUpdatingOptions";
import {
  UploadWidget,
  UploadWidgetConfig,
  UploadWidgetOnUpdateEvent,
  UploadWidgetResult
} from "@bytescale/upload-widget";
import { UploadWidgetReactConfig } from "@bytescale/upload-widget-react/UploadWidgetReactConfig";
import { BasicMouseEvent } from "@bytescale/upload-widget-react/BasicMouseEvent";

export type UploadButtonConfig = UploadWidgetReactConfig;

export interface UploadButtonProps {
  children: (props: { onClick: (event: BasicMouseEvent) => void }) => JSX.Element;
  onComplete?: (files: UploadWidgetResult[]) => void;
  onUpdate?: (event: UploadWidgetOnUpdateEvent) => void;
  options: UploadButtonConfig;
}

export const UploadButton = ({ options, onComplete, onUpdate, children }: UploadButtonProps): JSX.Element => {
  const onUpdateParams: Partial<UploadWidgetConfig> = onUpdate === undefined ? {} : { onUpdate };
  const autoUpdatingOptions = useAutoUpdatingOptions({
    ...options,
    ...onUpdateParams
  });

  const onClick = (e: BasicMouseEvent): void => {
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
