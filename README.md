<h1 align="center">
  <a href="https://www.bytescale.com/docs/upload-widget/react">
    <img alt="Bytescale Upload Widget for React" width="540" height="80" src="https://raw.githubusercontent.com/bytescale/bytescale-upload-widget-react/main/.github/assets/bytescale-upload-widget-react.svg">
  </a>
</h1>
<p align="center"><b>Beautiful File Upload Widget for React</b><br/> (With Built-in Cloud Storage)</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/@bytescale/upload-widget-react">
    <img src="https://img.shields.io/badge/%40bytescale%2Fupload--widget--react-npm-4ba0f6" />
  </a>

  <a href="https://github.com/bytescale/bytescale-upload-widget-react/actions/workflows/ci.yml">
    <img src="https://img.shields.io/badge/build-passing-4ba0f6" />
  </a>

  <a href="https://github.com/bytescale/bytescale-upload-widget-react/">
    <img src="https://img.shields.io/badge/gzipped-33%20kb-4ba0f6" />
  </a>

  <a href="https://www.npmjs.com/package/@bytescale/upload-widget-react">
    <img src="https://img.shields.io/npm/dt/uploader?color=%234ba0f6" />
  </a>
  <br/>

  <a href="https://www.npmjs.com/package/@bytescale/upload-widget-react">
    <img src="https://img.shields.io/badge/TypeScript-included-4ba0f6" />
  </a>

  <a href="https://github.com/bytescale/bytescale-upload-widget-react/actions/workflows/ci.yml">
    <img src="https://img.shields.io/npms-io/maintenance-score/uploader?color=4ba0f6" />
  </a>

  <a target="_blank" href="https://twitter.com/intent/tweet?text=This%20was%20a%20great%20find...%0A%0Ahttps%3A%2F%2Fgithub.com%2Fbytescale%2Fbytescale-upload-widget-react">
    <img alt="Twitter URL" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fbytescale%2Fbytescale-upload-widget-react" />
  </a>

</p>
<h1 align="center">
  Get Started —
  <a href="https://codepen.io/bytescale/pen/popWJpX?editors=0010">
    Try on CodePen
  </a>
</h1>

<p align="center"><a href="https://www.bytescale.com/docs/upload-widget"><img alt="Upload Widget Demo" width="100%" src="https://raw.githubusercontent.com/bytescale/bytescale-upload-widget/main/.github/assets/demo.gif"></a></p>

<p align="center">100% Serverless File Upload Widget  <br /> Powered by <a href="https://www.bytescale.com/">Bytescale</a><br/><br/></p>


<hr/>

<p align="center">
  <b>Supports:</b> Image Cropping, Video Previews, Document Previews, Drag & Drop, and more...
  <br />
  <br />
  <a href="https://www.bytescale.com/docs/upload-widget/react" rel="nofollow"><b>Full Documentation</b></a> • <a href="https://www.bytescale.com/docs/sdks/javascript" rel="nofollow">Headless SDK</a> • <a href="https://www.bytescale.com/docs/media-processing-apis" rel="nofollow">Media Processing APIs</a> • <a href="https://www.bytescale.com/docs/storage/sources" rel="nofollow">Storage</a> • <a href="https://www.bytescale.com/docs/cdn" rel="nofollow">CDN</a>
</p>

<hr/>

<br />
<br />

## Installation

Install via NPM:

```shell
npm install @bytescale/upload-widget-react
```

Or via YARN:

```shell
yarn add @bytescale/upload-widget-react
```

Or via a `<script>` tag:

```html
<script src="https://js.bytescale.com/upload-widget-react/v4"></script>
```

## Usage

### UploadButton — [Try on CodePen](https://codepen.io/bytescale/pen/popWJpX?editors=0010)

The `UploadButton` component uses a [render prop](https://reactjs.org/docs/render-props.html) to provide an `onClick` callback to your button element.

When clicked, a file upload modal will appear:

```javascript
import { UploadButton } from "@bytescale/upload-widget-react";

// Full Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration
const options = {
  apiKey: "free", // Get API keys from: www.bytescale.com
  maxFileCount: 10
};

const MyApp = () => (
  <UploadButton options={options}
                onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
    {({onClick}) =>
      <button onClick={onClick}>
        Upload a file...
      </button>
    }
  </UploadButton>
);
```

Required props:
- `options`
- `children`

Optional props:
- `onComplete`

### UploadDropzone — [Try on CodePen](https://codepen.io/bytescale/pen/LYrMzaB?editors=0010)

The `UploadDropzone` component renders an inline drag-and-drop file upload dropzone:

```javascript
import { UploadDropzone } from "@bytescale/upload-widget-react";

// Full Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration
const options = {
  apiKey: "free", // Get API keys from: www.bytescale.com
  maxFileCount: 10
};

const MyApp = () => (
  <UploadDropzone options={options}
                  onUpdate={files => alert(files.map(x => x.fileUrl).join("\n"))}
                  width="600px"
                  height="375px" />
);
```

Required props:
- `options`

Optional props:
- `onUpdate`
- `width`
- `height`

## Result

The callbacks receive a `Array<UploadWidgetResult>`:

```javascript
{
  fileUrl: "https://upcdn.io/FW25...",   // URL to use when serving this file.
  filePath: "/uploads/example.jpg",      // File path (we recommend saving this to your database).

  editedFile: undefined,                 // Edited file (for image crops). Same structure as below.

  originalFile: {
    fileUrl: "https://upcdn.io/FW25...", // Uploaded file URL.
    filePath: "/uploads/example.jpg",    // Uploaded file path (relative to your raw file directory).
    accountId: "FW251aX",                // Bytescale account the file was uploaded to.
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

## ⚙️ Configuration

All configuration is optional (except for the `apiKey` field, which is required).

```javascript
const options = {
  apiKey: "free",                 // Get API keys from: www.bytescale.com
  locale: myCustomLocale,         // EN_US by default. (See "Localization" section below.)
  maxFileCount: 5,                // Unlimited by default (or 1 if multi: false).
  maxFileSizeBytes: 1024 ** 2,    // Unlimited by default.
  mimeTypes: ["image/*"],         // Unrestricted by default. Supports * wildcard suffix.
  multi: false,                   // False by default.
  onInit: ({                      // Exposes lifecycle methods for the component.
    close,                        // Closes the widget when called.
    reset,                        // Resets the widget when called.
    updateConfig                  // Updates the widget's config by passing a new config
  }) => {},                       // object to the method's first parameter.
  onUpdate: files => {},          // Called each time the list of uploaded files change.
  onPreUpload: async file => ({
    errorMessage: "Uh oh!",       // Displays this validation error to the user (if set).
    transformedFile: file         // Uploads 'transformedFile' instead of 'file' (if set).
  }),
  showFinishButton: true,         // Show/hide the "finish" button in the widget.
  showRemoveButton: true,         // Show/hide the "remove" button next to each file.
  styles: {
    colors: {
      primary: "#377dff",         // Primary buttons & links
      active: "#528fff",          // Primary buttons & links (hover). Inferred if undefined.
      error: "#d23f4d",           // Error messages
      shade100: "#333",           // Standard text
      shade200: "#7a7a7a",        // Secondary button text
      shade300: "#999",           // Secondary button text (hover)
      shade400: "#a5a6a8",        // Welcome text
      shade500: "#d3d3d3",        // Modal close button
      shade600: "#dddddd",        // Border
      shade700: "#f0f0f0",        // Progress indicator background
      shade800: "#f8f8f8",        // File item background
      shade900: "#fff"            // Various (draggable crop buttons, etc.)
    },
    fontFamilies: {
      base: "arial, sans-serif"   // Base font family (comma-delimited).
    },
    fontSizes: {
      base: 16                    // Base font size (px).
    }
  },
  path: {                         // Optional: a string (full file path) or object like so:
    fileName: "Example.jpg",      // Supports path variables (e.g. {ORIGINAL_FILE_EXT}).
    folderPath: "/uploads"        // Please refer to docs for all path variables.
  },
  metadata: {
    hello: "world"                // Arbitrary JSON metadata (saved against the file).
  },
  tags: ["profile_picture"],      // Requires a Bytescale account.
  editor: {
    images: {
      preview: true,              // True by default if cropping is enabled. Previews PDFs and videos too.
      crop: true,                 // True by default.
      cropFilePath: image => {    // Choose the file path used for JSON image crop files.
        const {filePath} = image  // In:  https://www.bytescale.com/docs/upload-api/types/FileDetails
        return `${filePath}.crop` // Out: https://www.bytescale.com/docs/upload-api/types/FilePathDefinition
      },
      cropRatio: 4 / 3,           // Width / Height. Undefined enables freeform (default).
      cropShape: "rect"           // "rect" (default) or "circ".
    }
  },
}
```

### 🏳️ Localization

Default is [EN_US](https://github.com/bytescale/bytescale-upload-widget-react/blob/main/lib/src/modules/locales/EN_US.ts):

```javascript
const myCustomLocale = {
  "error!": "Error!",
  "done": "Done",
  "addAnotherFile": "Add another file...",
  "addAnotherImage": "Add another image...",
  "cancel": "cancel",
  "cancelInPreviewWindow": "Cancel",
  "cancelled!": "cancelled",
  "continue": "Continue",
  "customValidationFailed": "Failed to validate file.",
  "crop": "Crop",
  "finish": "Finished",
  "finishIcon": true,
  "image": "Image",
  "maxFilesReached": "Maximum number of files:",
  "maxImagesReached": "Maximum number of images:",
  "maxSize": "File size limit:",
  "next": "Next",
  "of": "of",
  "orDragDropFile": "...or drag and drop a file.",
  "orDragDropFiles": "...or drag and drop files.",
  "orDragDropImage": "...or drag and drop an image.",
  "orDragDropImages": "...or drag and drop images.",
  "pleaseWait": "Please wait...",
  "removed!": "removed",
  "remove": "remove",
  "skip": "Skip",
  "unsupportedFileType": "File type not supported.",
  "uploadFile": "Upload a File",
  "uploadFiles": "Upload Files",
  "uploadImage": "Upload an Image",
  "uploadImages": "Upload Images",
  "validatingFile": "Validating file..."
}
```

# 🌐 API Support

## 🌐 File Management APIs

Bytescale provides a wide range of [File Management APIs](https://www.bytescale.com/docs/apis):

- **[File Listing](https://www.bytescale.com/docs/folder-api/ListFolder)**
- **[File Deleting](https://www.bytescale.com/docs/file-api/DeleteFile)**
- **[File Copying](https://www.bytescale.com/docs/file-api/CopyFile)**
- [And more...](https://www.bytescale.com/docs/apis)

## 🌐 Media Processing APIs (Image/Video/Audio)

Bytescale also provides real-time [Media Processing APIs](https://www.bytescale.com/docs/media-processing-apis):

- **[Image Processing APIs](https://www.bytescale.com/docs/image-processing-api)** ([resize](https://www.bytescale.com/docs/image-processing-api#image-resizing-api), [crop](https://www.bytescale.com/docs/image-processing-api#image-cropping-api), [convert](https://www.bytescale.com/docs/image-processing-api#f), [compress](https://www.bytescale.com/docs/image-processing-api#image-compression-api) & [watermark](https://www.bytescale.com/docs/image-processing-api#Text-layering-api))
- **[Video Processing APIs](https://www.bytescale.com/docs/video-processing-api)** ([transcode](https://www.bytescale.com/docs/video-processing-api#video-transcoding-api), [optimize](https://www.bytescale.com/docs/video-processing-api#video-compression-api), [resize](https://www.bytescale.com/docs/video-processing-api#video-resizing-api) & [extract metadata](https://www.bytescale.com/docs/video-processing-api#video-metadata-api))
- **[Audio Processing APIs](https://www.bytescale.com/docs/audio-processing-api)** ([transcode](https://www.bytescale.com/docs/audio-processing-api#audio-transcoding-api), [optimize](https://www.bytescale.com/docs/audio-processing-api#audio-compression-api), [trim](https://www.bytescale.com/docs/audio-processing-api#audio-trimming-api) & [extract metadata](https://www.bytescale.com/docs/audio-processing-api#audio-metadata-api))

### Image Processing API (Original Image)

Here's an example using [a photo of Chicago](https://upcdn.io/W142hJk/raw/example/city-landscape.jpg):

<img src="https://upcdn.io/W142hJk/raw/example/city-landscape.jpg" />

```
https://upcdn.io/W142hJk/raw/example/city-landscape.jpg
```

### Image Processing API (Transformed Image)

Using the [Image Processing API](https://www.bytescale.com/docs/image-processing-api), you can produce [this image](https://upcdn.io/W142hJk/image/example/city-landscape.jpg?w=900&h=600&fit=crop&f=webp&q=80&blur=4&text=WATERMARK&layer-opacity=80&blend=overlay&layer-rotate=315&font-size=100&padding=10&font-weight=900&color=ffffff&repeat=true&text=Chicago&gravity=bottom&padding-x=50&padding-bottom=20&font=/example/fonts/Lobster.ttf&color=ffe400):

<img src="https://upcdn.io/W142hJk/image/example/city-landscape.jpg?w=900&h=600&fit=crop&f=webp&q=80&blur=4&text=WATERMARK&layer-opacity=80&blend=overlay&layer-rotate=315&font-size=100&padding=10&font-weight=900&color=ffffff&repeat=true&text=Chicago&gravity=bottom&padding-x=50&padding-bottom=20&font=/example/fonts/Lobster.ttf&color=ffe400" />

```
https://upcdn.io/W142hJk/image/example/city-landscape.jpg
  ?w=900
  &h=600
  &fit=crop
  &f=webp
  &q=80
  &blur=4
  &text=WATERMARK
  &layer-opacity=80
  &blend=overlay
  &layer-rotate=315
  &font-size=100
  &padding=10
  &font-weight=900
  &color=ffffff
  &repeat=true
  &text=Chicago
  &gravity=bottom
  &padding-x=50
  &padding-bottom=20
  &font=/example/fonts/Lobster.ttf
  &color=ffe400
```

## Authorization

Bytescale supports two types of authorization:

### API Keys

The Bytescale Upload Widget uses the `apiKey` parameter to authenticate with the [Bytescale API](https://www.bytescale.com/docs/apis).

With API key auth, the requester has access to the resources available to the API key:

- Secret API keys (`secret_***`) have access to all API endpoints (see the [Bytescale JavaScript SDK](https://www.bytescale.com/docs/sdks/javascript)).

- Public API keys (`public_***`) have access to file upload, file download, and file listing API endpoints. File overwrites, file deletes, and all other destructive operations cannot be performed using public API keys. File listing is also disabled by default (but can be changed in the API key's settings).

You must always use **public API keys** (e.g. `public_***`) in your client-side code.

Each API key can have its read/write access limited to a subset of files/folders.

### JWT Cookies

JWT cookies are optional.

With JWT cookies, the user can download private files directly via the URL, as authorization is performed implicitly via a session cookie. This allows the browser to display private files in `<img>` and `<video>` elements.

With JWT cookies, the user can also upload files to locations that aren't otherwise permitted by the API key, but are permitted by the [JWT's payload](https://www.bytescale.com/docs/types/BytescaleJwt). This is because the [Bytescale Upload Widget](https://www.bytescale.com/docs/upload-widget) internally uses the [Bytescale JavaScript SDK](https://www.bytescale.com/docs/sdks/javascript) to perform file uploads, and the Bytescale JavaScript SDK automatically injects the user's JWT into all API requests once the `AuthManager.beginAuthSession` method has been called.

_Note: when using JWT cookies to download files, the `?auth=true` query parameter must be added to the URL._

[Learn more about the `AuthManager` and JWT cookies »](https://www.bytescale.com/docs/authorization#jwt-cookie)

## UrlBuilder

The [Bytescale JavaScript SDK](https://github.com/bytescale/bytescale-javascript-sdk) exports a `UrlBuilder` to construct URLs from `filePath` values:

```javascript
import { UrlBuilder } from "@bytescale/sdk";
```

**Recommended:** you should always save `filePath` values to your DB instead of `fileUrl` values.

#### Raw Files

To get the URL for the uploaded image `/example.jpg` in its original form, use the following:

```javascript
// Returns: "https://upcdn.io/1234abc/raw/example.jpg"
UrlBuilder.url({
  accountId: "1234abc",
  filePath: "/example.jpg"
});
```

#### Images

To resize the uploaded image `/example.jpg` to 800x600, use the following:

```javascript
// Returns: "https://upcdn.io/1234abc/image/example.jpg?w=800&h=600"
UrlBuilder.url({
  accountId: "1234abc",
  filePath: "/example.jpg",
  options: {
    transformation: "image",
    transformationParams: {
      w: 800,
      h: 600
    }
  }
});
```

[Image Processing API Docs »](https://www.bytescale.com/docs/image-processing-api)

#### Videos

To transcode the uploaded video `/example.mov` to MP4/H.264 in HD, use the following:

```javascript
// Returns: "https://upcdn.io/1234abc/video/example.mov?f=mp4-h264&h=1080"
UrlBuilder.url({
  accountId: "1234abc",
  filePath: "/example.mov",
  options: {
    transformation: "video",
    transformationParams: {
      f: "mp4-h264",
      h: 1080
    }
  }
});
```

[Video Processing API Docs »](https://www.bytescale.com/docs/video-processing-api)

#### Audio

To transcode the uploaded audio `/example.wav` to AAC in 192kbps, use the following:

```javascript
// Returns: "https://upcdn.io/1234abc/audio/example.wav?f=aac&br=192"
UrlBuilder.url({
  accountId: "1234abc",
  filePath: "/example.wav",
  options: {
    transformation: "audio",
    transformationParams: {
      f: "aac",
      br: 192
    }
  }
});
```

[Audio Processing API Docs »](https://www.bytescale.com/docs/audio-processing-api)

#### Archives

To extract the file `document.docx` from the uploaded ZIP file `/example.zip`, use the following:

```javascript
// Returns: "https://upcdn.io/1234abc/archive/example.zip?m=extract&artifact=/document.docx"
UrlBuilder.url({
  accountId: "1234abc",
  filePath: "/example.zip",
  options: {
    transformation: "archive",
    transformationParams: {
      m: "extract"
    },
    artifact: "/document.docx"
  }
});
```

[Archive Processing API Docs »](https://www.bytescale.com/docs/archive-processing-api)

## 🙋 Can I use my own storage?

Bytescale supports AWS S3, Cloudflare R2, Google Storage, DigitalOcean Spaces, and Bytescale Storage.

**[Bytescale Storage Docs »](https://www.bytescale.com/docs/storage/sources)**

## 👋 Create your Bytescale Account

Bytescale is the best way to upload, transform, and serve images, videos, and audio at scale.

**[Create a Bytescale account »](https://www.bytescale.com/get-started)**

#### Full Documentation

- **[Bytescale Upload Widget Docs »](https://www.bytescale.com/docs/upload-widget)**
- **[Bytescale Upload Widget (React) Docs »](https://www.bytescale.com/docs/upload-widget/frameworks/react)**
- **[Bytescale Upload Widget (Angular) Docs »](https://www.bytescale.com/docs/upload-widget/frameworks/angular)**
- **[Bytescale Upload Widget (Vue.js) Docs »](https://www.bytescale.com/docs/upload-widget/frameworks/vue)**
- **[Bytescale Upload Widget (jQuery) Docs »](https://www.bytescale.com/docs/upload-widget/frameworks/jquery)**

## License

[MIT](LICENSE)
