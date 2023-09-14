// "@bytescale/sdk" & "@bytescale/upload-widget" are already bundled-in to the CDN release, however, it won't be accessible.
// Having the user include them via a 2nd/3rd script tag is inefficient, as they'll be downloading its code twice. Instead,
// we make the packages available on 'global'.
export * from "@bytescale/sdk";
export * from "@bytescale/upload-widget";
export * from "@bytescale/upload-widget-react";
