/**
 * Create an RxJS program that takes a stream of numbers and
 * emits the top N numbers seen so far, where N is a parameter passed to the program.
 */
import { from } from 'rxjs';
import { scan, map } from 'rxjs/operators';

const numbers = [4, 7, 1, 3, 6, 8, 5, 2];
const topN = 3;
const observable$ = from(numbers).pipe(
  scan((acc, val) => [...acc, val].sort((a, b) => b - a).slice(0, topN), []),
  map(arr => arr.join(', '))
);
observable$.subscribe(console.log);
