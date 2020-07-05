import { Observable } from 'rxjs';

export function myOperator<T>(source: Observable<T>) {
  return source;
}
