import { Observable, timer } from 'rxjs';
import { concatMapTo } from 'rxjs/operators';

export function polling<T>(stream: Observable<T>, period: number, initialDelay = 0) {
  return timer(initialDelay, period).pipe(concatMapTo(stream));
}
