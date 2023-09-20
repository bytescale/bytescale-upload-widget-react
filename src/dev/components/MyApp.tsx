import React, { useState } from "react";
import { UploadButton, UploadDropzone } from "@bytescale/upload-widget-react";

export default (): JSX.Element => {
  const [files, setFiles] = useState<string[]>([]);
  const [, setCallback] = useState<() => void>(() => {});
  console.log(`Hey ${Math.random()}`);
  return (
    <>
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
        options={{
          apiKey: "free",
          onInit: ({ close }) => {
            setCallback(close);
          }
        }}
        onUpdate={x => setFiles(x.uploadedFiles.map(x => x.fileUrl))}
      />
    </>
  );
};
