/**
 * Write an RxJS program that takes a stream of numbers
 * and emits the percentage of the total that each number represents.
 */
import { from } from 'rxjs';
import { scan, map, last } from 'rxjs/operators';

const numbers = [10, 20, 30, 40, 50];
const observable$ = from(numbers).pipe(
  scan((acc, val) => acc + val, 0),
  map(sum => numbers.map(num => (num / sum) * 100)),
  last()
);
observable$.subscribe(console.log);
