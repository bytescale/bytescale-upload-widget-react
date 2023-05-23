import { useCallback, useState } from "react";

/**
 * Unlike 'useRef', 'useElementRef' will trigger a rerender when the reference is updated.
 */
export function useElementRef(): [HTMLElement | undefined, (e: HTMLElement | null) => void] {
  const [element, setElement] = useState<HTMLElement | undefined>(undefined);
  const elementRef = useCallback((e: HTMLElement | null) => {
    setElement(e ?? undefined);
  }, []);

  return [element, elementRef];
}
