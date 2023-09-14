import { useObjectDep } from "react-uploader/hooks/UseObjectDep";
import { useEffect, useState } from "react";
import { UploadWidgetConfig, UploadWidgetMethods } from "@bytescale/upload-widget";

export function useAutoUpdatingOptions(options: UploadWidgetConfig): UploadWidgetConfig {
  const [methods, setMethods] = useState<UploadWidgetMethods | undefined>(undefined);
  const optionsDep = useObjectDep(options);

  useEffect(() => {
    if (methods !== undefined) {
      methods.updateConfig(options);
    }
  }, [optionsDep, methods]);

  return {
    ...options,
    onInit: m => {
      if (options?.onInit !== undefined) {
        options.onInit(m);
      }
      setMethods(m);
    }
  };
}
