# Migration Guide

## From React Uploader (`react-uploader`)

Steps:

1. Install `@bytescale/upload-widget-react`
2. Uninstall `react-uploader` and `uploader`
3. Replace `"react-uploader"` with `"@bytescale/upload-widget-react"` in your `import` statements
4. Remove `uploader` (from imports and props)
5. Add `apiKey` as a field to the object passed to the `options` prop (add it if you don't have one).

### Before

```jsx
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

// Get production API keys from Bytescale.com
const uploader = Uploader({
  apiKey: "free"
});

// Customize the dropzone UI (see "customization"):
const options = { multi: true };

// Render the file upload dropzone:
const MyDropzoneComponent = () => (
  <UploadDropzone
    uploader={uploader} // Required.
    options={options} // Optional.
    width="600px" // Optional.
    height="375px" // Optional.
    onUpdate={files => {
      // Optional.
      if (files.length === 0) {
        console.log("No files selected.");
      } else {
        console.log("Files uploaded:");
        console.log(files.map(f => f.fileUrl));
      }
    }}
  />
);
```

### After

```jsx
import { UploadDropzone } from "@bytescale/upload-widget-react";

const options = {
  apiKey: "free", // Get API keys from: www.bytescale.com
  multi: true // Full Config: https://www.bytescale.com/docs/upload-widget#configuration
};

// Render the file upload dropzone:
const MyDropzoneComponent = () => (
  <UploadDropzone
    options={options} // Required.
    width="600px" // Optional.
    height="375px" // Optional.
    onUpdate={files => {
      // Optional.
      if (files.length === 0) {
        console.log("No files selected.");
      } else {
        console.log("Files uploaded:");
        console.log(files.map(f => f.fileUrl));
      }
    }}
  />
);
```
