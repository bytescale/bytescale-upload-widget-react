// upload-js & uploader are already bundled-in to the CDN release, however, it won't be accessible. Having them include
// upload-js or uploader via a 2nd/3rd script tag is inefficient, as they'll be downloading its code twice. Instead, we
// make the bundled packages available on 'global', allowing them to construct an Upload(er) instance.
export * from "upload-js";
export * from "uploader";
export * from "react-uploader";
