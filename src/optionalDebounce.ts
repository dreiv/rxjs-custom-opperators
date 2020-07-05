import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export function optionalDebounce<T>(time?: number) {
  return function<T>(source: Observable<T>): Observable<T> {
    return time === undefined ? source : source.pipe(debounceTime(time));
  };
}
