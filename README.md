<h1 align="center">
  <a href="https://upload.io/uploader">
    <img alt="Uploader" width="264" height="121" src="https://raw.githubusercontent.com/upload-io/react-uploader/main/.github/assets/logo.svg">
  </a>
</h1>

<p align="center"><b>React File Upload Widget</b><br/> (With Integrated Cloud Storage)</p>

<p align="center">React Wrapper for <a href="https://upload.io/uploader">Uploader</a> • Files Hosted on <a href="https://upload.io/">Upload.io</a><br/><br/></p>

<p align="center">
  <a href="https://github.com/upload-io/react-uploader/">
    <img src="https://img.shields.io/badge/gzipped-29%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/react-uploader">
    <img src="https://img.shields.io/badge/react--uploader-npm-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/react-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/react-uploader">
    <img src="https://img.shields.io/npm/dt/react-uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/react-uploader">
    <img src="https://img.shields.io/badge/TypeScript-included-4ba0f6" />
  </a>

  <a href="https://github.com/upload-io/react-uploader/actions/workflows/ci.yml">
    <img src="https://img.shields.io/npms-io/maintenance-score/react-uploader?color=4ba0f6" />
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20found%20Uploader%20%26%20Upload.io%20%E2%80%94%20they%20make%20it%20super%20easy%20to%20upload%20files%20%E2%80%94%20installs%20with%207%20lines%20of%20code%20https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader&hashtags=javascript,opensource,js,webdev,developers&via=UploadJS">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fupload-io%2Fuploader%2F" />
  </a>

</p>


<h1 align="center">
  Quick Start —
  <a href="https://codepen.io/upload-js/pen/popWJpX?editors=1010">
    Try on CodePen
  </a>
</h1>

<p align="center"><a href="https://upload.io/uploader"><img alt="Upload Widget Demo" width="100%" src="https://raw.githubusercontent.com/upload-io/react-uploader/main/.github/assets/demo.webp"></a></p>

<p align="center">To implement the above widget:</p>

```shell
npm install react-uploader
```

```javascript
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

const uploader = new Uploader({
  // Get production API keys from Upload.io
  apiKey: "free"
});

<UploadButton uploader={uploader}
              options={{multi: true}}
              onComplete={files => console.log(files)}>
  {({onClick}) =>
    <button onClick={onClick}>
      Upload a file...
    </button>
  }
</UploadButton>
```

# Installation

Install via NPM:

```shell
npm install react-uploader
```

Or via YARN:

```shell
yarn add react-uploader
```

Or via a `<script>` tag:

```html
<script src="https://js.upload.io/react-uploader/v1"></script>
```

## Initialize

Initialize once at the start of your application:

```javascript
import { Uploader } from "uploader";

// Get production API keys from Upload.io
const uploader = new Uploader({
  apiKey: "free"
});
```

## Choose a Component

`react-uploader` provides two UI components:

### (1) File Upload Button

```javascript
import { UploadButton } from "react-uploader";

<UploadButton uploader={uploader}
              options={{multi: true}}
              onComplete={files => console.log(files)}>
  {({onClick}) =>
    <button onClick={onClick}>
      Upload a file...
    </button>
  }
</UploadButton>
```

### (2) Dropzone

```javascript
import { UploadDropzone } from "react-uploader";

<UploadDropzone uploader={uploader}
                options={{multi: true}}
                onUpdate={files => console.log(files)}
                width="600px"
                height="375px" />
```

## The Result

The `onComplete` callback receives a `Array<UploaderResult>`:

```javascript
{
  fileUrl: "https://upcdn.io/FW25...",          // The URL to use when serving this file.

  editedFile: undefined,                        // The edited file (if present). Same as below.

  originalFile: {
    accountId: "FW251aX",                       // The Upload.io account that owns the file.
    file: { ... },                              // DOM file object (from the <input> element).
    fileId: "FW251aXa9ku...",                   // The uploaded file ID.
    fileUrl: "https://upcdn.io/FW25...",        // The uploaded file URL.
    fileSize: 12345,                            // File size in bytes.
    mime: "image/jpeg",                         // File MIME type.
    suggestedOptimization: {
      transformationUrl: "https://upcdn.io/..", // The suggested URL for serving this file.
      transformationSlug: "thumbnail"           // Append to 'fileUrl' to produce the above URL.
    },
    tags: [                                     // Tags manually & auto-assigned to this file.
      { name: "tag1", searchable: true },
      { name: "tag2", searchable: true },
      ...
    ]
  }
}
```

## Full Documentation

`react-uploader` is a React wrapper for `uploader`.

Please see: **[Uploader Docs](https://github.com/upload-io/uploader#%EF%B8%8F-configuration)**.

## Contribute

If you would like to contribute to Uploader:

1. Add a [GitHub Star](https://github.com/upload-io/react-uploader/stargazers) to the project (if you're feeling generous!).
2. Determine whether you're raising a bug, feature request or question.
3. Raise your issue or PR.

## License

[MIT](LICENSE)
