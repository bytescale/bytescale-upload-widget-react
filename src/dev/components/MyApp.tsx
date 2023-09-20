import React, { useEffect, useState } from "react";
import { UploadButton, UploadDropzone } from "@bytescale/upload-widget-react";
import { UploadWidgetOnPreUploadResult } from "@bytescale/upload-widget/dist/config/UploadWidgetOnPreUploadResult";

/**
 * Playground for manual testing/experimentation of various edge cases. For example, checking how changes to the 'options'
 * param impact the upload components.
 */
export default (): JSX.Element => {
  const [files, setFiles] = useState<string[]>([]);
  const [, setCallback] = useState<() => void>(() => {});
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => setTicks(x => x + 1), 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <>
      <p>Ticks: {ticks}</p>

      <ul>
        {files.map(x => (
          <li key={x}>
            <a href={x}>{x}</a>
          </li>
        ))}
      </ul>

      <UploadButton
        options={{ apiKey: "free", multi: true }}
        onUpdate={x => setFiles(x.uploadedFiles.map(x => x.fileUrl))}>
        {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
      </UploadButton>
      <UploadDropzone
        className={Math.random().toString()}
        options={{
          apiKey: "free",
          multi: true,
          onInit: ({ reset }) => {
            setCallback(reset);
          },
          styles: { colors: { primary: `#${Math.floor(Math.random() * 16777215).toString(16)}` } },
          onPreUpload: (): UploadWidgetOnPreUploadResult | undefined => {
            return Math.random() < 0.5 ? undefined : { errorMessage: "Hello" };
          }
        }}
        onUpdate={x => setFiles(x.uploadedFiles.map(x => x.fileUrl))}
      />
    </>
  );
};
