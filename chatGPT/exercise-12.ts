/**
 * Create an RxJS program that takes a stream of arrays and emits the concatenation of all the arrays.
 */
import { from } from 'rxjs';
import { concatAll } from 'rxjs/operators';

const arrays = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const observable$ = from(arrays).pipe(concatAll());
observable$.subscribe(console.log);
