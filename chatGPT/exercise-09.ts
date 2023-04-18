/**
 * Write an RxJS program that takes a stream of numbers and emits the average of the last 5 numbers.
 */
import { from } from 'rxjs';
import { scan, bufferCount, map } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const observable$ = from(numbers).pipe(
  scan((acc, val) => [...acc.slice(-4), val], []),
  bufferCount(5, 1),
  map(arr => arr.reduce((acc, val) => acc + val) / 5)
);
observable$.subscribe(console.log);
