global.console = {
  log: () => undefined, // console.log are ignored in tests

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: e => {
    if (e.includes("Rendering components directly into document.body")) {
      // Silence React "render in body" warning.
      return;
    }
    console.error(e);
  },
  warn: console.warn,
  info: console.info,
  debug: console.debug
};
