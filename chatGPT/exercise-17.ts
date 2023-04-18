/**
 * Write an RxJS program that takes a stream of numbers and emits
 * the largest number seen so far, but only if it's larger than the average of the numbers seen so far.
 */
import { from } from 'rxjs';
import { scan, filter, map } from 'rxjs/operators';

const numbers = [4, 7, 1, 3, 6, 8, 5, 2];
const observable$ = from(numbers).pipe(
  scan(
    (acc, val) => {
      const sum = acc.sum + val;
      const count = acc.count + 1;
      const avg = sum / count;
      return { sum, count, avg, max: val > avg ? val : acc.max };
    },
    { sum: 0, count: 0, avg: 0, max: Number.NEGATIVE_INFINITY }
  ),
  map(({ max }) => max),
  filter(val => val !== Number.NEGATIVE_INFINITY)
);
observable$.subscribe(console.log);
