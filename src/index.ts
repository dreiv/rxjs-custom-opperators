import { interval } from "rxjs";
import { map } from 'rxjs/operators';

// import { myOperator } from './myOperator';

// interval(1000).pipe(
  //   myOperator
  // ).subscribe(value => console.log('#myOperator', value));

// import { filterNil } from './filterNil';

// interval(1000).pipe(
//   map(value => value % 3 == 0 ? undefined : value),
//   filterNil()
// ).subscribe(value => console.log(value));

import { filterNil } from './filterNillShort';
import { debug } from './debug';

interval(1000).pipe(
  map(value => value % 3 == 0 ? undefined : value),
  filterNil(),
  debug('myTag')
).subscribe(value => console.log(value));
