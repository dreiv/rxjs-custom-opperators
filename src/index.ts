import { interval } from "rxjs";

import { myOperator } from './myOperator';

interval(1000).pipe(
  myOperator
).subscribe(value => console.log('#myOperator', value));
