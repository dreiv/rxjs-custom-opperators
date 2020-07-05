import { Observable } from 'rxjs';

export function filterNil() {
  return function <T>(source: Observable<T>): Observable<T> {
    return new Observable(subscriber => {
      return source.subscribe({
        next(value) {
          if (value !== undefined && value !== null) {
            subscriber.next(value);
          }
        },
        error(error) {
          subscriber.error(error);
        },
        complete() {
          subscriber.complete();
        }
      });
    });
  };
}
