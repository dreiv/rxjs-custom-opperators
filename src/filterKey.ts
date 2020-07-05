import { filter } from "rxjs/operators";

type KeyboardEventKeys = 'Escape' | 'Enter';

export function filterKey(key: KeyboardEventKeys) {
  return filter((event: KeyboardEvent) => event.key === key);
}
