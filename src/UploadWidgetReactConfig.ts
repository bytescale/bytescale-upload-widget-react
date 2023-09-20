import { UploadWidgetConfig } from "@bytescale/upload-widget";

/**
 * The Bytescale Upload Widget for React uses the same options as the underlying Bytescale Upload Widget (for JavaScript), with the following exceptions:
 * - Options that are automatically set for the user are removed from the options object.
 * - The 'onUpdate' option is declared as a prop instead of an option:
 *   - This due to 'onComplete' being required as a prop, as it's not an option on the underlying widget. Since 'onUpdate' is frequently used as an alternative to 'onComplete' for dropzones, we make it a prop too, to increase its visibility.
 *   - We don't make all handlers props, as we may add more in the future to the underlying Bytescale Upload Widget, so remembering to move them to props in the Bytescale Upload Widget for React would be problematic.
 */
export type UploadWidgetReactConfig = Omit<UploadWidgetConfig, "onUpdate" | "layout" | "fetchApi">; // "container" must be user-configurable for the UploadButton.
