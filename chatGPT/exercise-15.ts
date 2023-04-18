/**
 * Write an RxJS program that takes a stream of numbers and emits the median of the numbers seen so far.
 */

import { from } from 'rxjs';
import { scan, map } from 'rxjs/operators';

const numbers = [4, 7, 1, 3, 6, 8, 5, 2];
const observable$ = from(numbers).pipe(
  scan((acc, val) => [...acc, val].sort((a, b) => a - b)),
  map(arr => {
    const len = arr.length;
    if (len % 2 === 0) {
      return (arr[len / 2 - 1] + arr[len / 2]) / 2;
    } else {
      return arr[(len - 1) / 2];
    }
  })
);
observable$.subscribe(console.log);
