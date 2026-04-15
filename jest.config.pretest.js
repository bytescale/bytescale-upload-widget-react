/* eslint @typescript-eslint/no-unsafe-argument: 0, @typescript-eslint/unbound-method: 0 */
const nativeConsole = global.console;
global.console = {
  log: () => undefined, // console.log are ignored in tests

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: (message, ...rest) => {
    if (typeof message === "string" && message.includes("Rendering components directly into document.body")) {
      // Silence React "render in body" warning.
      return;
    }
    nativeConsole.error(message, ...rest);
  },
  warn: nativeConsole.warn,
  info: nativeConsole.info,
  debug: nativeConsole.debug
};
