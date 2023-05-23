import { UploadWidgetConfig } from "uploader";
import { useObjectDep } from "react-uploader/hooks/UseObjectDep";
import { useEffect, useState } from "react";
import { UploadWidgetMethods } from "uploader/dist/config/UploadWidgetMethods";

export function useAutoUpdatingOptions(optionsMaybe: UploadWidgetConfig | undefined): UploadWidgetConfig {
  const [methods, setMethods] = useState<UploadWidgetMethods | undefined>(undefined);
  const optionsDep = useObjectDep(optionsMaybe ?? {});

  useEffect(() => {
    if (methods !== undefined) {
      methods.updateConfig(optionsMaybe ?? {});
    }
  }, [optionsDep, methods]);

  return {
    ...optionsMaybe,
    onInit: m => {
      if (optionsMaybe?.onInit !== undefined) {
        optionsMaybe.onInit(m);
      }
      setMethods(m);
    }
  };
}
