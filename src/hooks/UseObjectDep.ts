import { useRef } from "react";
import isEqual from "lodash.isequal";

export function useObjectDep<T>(value: T): T {
  const ref = useRef<T>();

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current ?? value;
}
