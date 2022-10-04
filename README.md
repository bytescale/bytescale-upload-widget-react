<h1 align="center">
  <a href="https://upload.io/uploader">
    <img alt="React Uploader" width="264" height="106" src="https://raw.githubusercontent.com/upload-io/react-uploader/main/.github/assets/logo.svg">
  </a>
</h1>

<p align="center"><b>React File Upload Widget</b><br/> (With Integrated Cloud Storage)</p>

<p align="center">React Wrapper for <a href="https://upload.io/uploader">Uploader</a> • Developed by <a href="https://upload.io/">Upload.io</a><br/><br/></p>

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

const uploader = Uploader({
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

# Usage

Initialize once at the start of your application:

```javascript
import { Uploader } from "uploader";

// Get production API keys from Upload.io
const uploader = Uploader({
  apiKey: "free"
});
```

Then choose a UI component:

## `UploadButton`

The `UploadButton` component uses a [render prop](https://reactjs.org/docs/render-props.html) to provide an `onClick` callback to your button element.

When clicked, a file upload modal will appear:

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

Required props:
- `uploader`
- `children`

Optional props:
- `options`
- `onComplete`

## `UploadDropzone`

The `UploadDropzone` component renders an inline drag-and-drop file upload dropzone:

```javascript
import { UploadDropzone } from "react-uploader";

<UploadDropzone uploader={uploader}
                options={{multi: true}}
                onUpdate={files => console.log(files)}
                width="600px"
                height="375px" />
```


Required props:
- `uploader`

Optional props:
- `options`
- `onUpdate`
- `width`
- `height`


## The Result

The callbacks receive a `Array<UploaderResult>`:

```javascript
{
  fileUrl: "https://upcdn.io/FW25...",   // URL to use when serving this file.

  editedFile: undefined,                 // Edited file (for image crops). Same structure as below.

  originalFile: {
    fileUrl: "https://upcdn.io/FW25...", // Uploaded file URL.
    filePath: "/uploads/example.jpg",    // Uploaded file path (relative to your raw file directory).
    accountId: "FW251aX",                // Upload.io account the file was uploaded to.
    originalFileName: "example.jpg",     // Original file name from the user's machine.
    file: { ... },                       // Original DOM file object from the <input> element.
    size: 12345,                         // File size in bytes.
    lastModified: 1663410542397,         // Epoch timestamp of when the file was uploaded or updated.
    mime: "image/jpeg",                  // File MIME type.
    metadata: {
      ...                                // User-provided JSON object.
    },
    tags: [
      "tag1",                            // User-provided & auto-generated tags.
      "tag2",
      ...
    ]
  }
}
```

## Full Documentation

React Uploader is a wrapper for Uploader — see the **[Uploader Docs](https://github.com/upload-io/uploader#%EF%B8%8F-configuration)** 📖

## Where are my files stored?

Uploader uses [Upload.io](https://upload.io) as a file storage & file hosting backend.

Upload.io benefits developers with:

- Zero Setup (Start uploading in the next few minutes!)
- Pre-Integrated Storage (All you need is an Upload API key)
- Fast File Hosting (Worldwide CDN, 300 Nodes)
- Powerful Rules Engine (Rate Limiting, Traffic Limiting, IP Blacklisting, Expiring Links, etc)
- File Transformations (Image Resizing, Cropping, Optimization, etc)

### 🔧 Can I bring my own file storage?

Uploader's USP is to provide the fastest way to integrate end-to-end file uploads into a web app, while remaining customizable. As such, Uploader will always be closely integrated with the Upload.io platform, and there are currently no plans to support custom backends. You may, however, sync files from your Upload.io account to a custom storage target.

## Contribute

If you would like to contribute to Uploader:

1. Add a [GitHub Star](https://github.com/upload-io/react-uploader/stargazers) to the project (if you're feeling generous!).
2. Determine whether you're raising a bug, feature request or question.
3. Raise your issue or PR.

## License

[MIT](LICENSE)
