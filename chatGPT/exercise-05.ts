/**
 * Write an RxJS program that takes a stream of numbers and emits the sum of all the numbers in the stream.
 */
import { from } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];
const observable$ = from(numbers).pipe(
  scan((acc, val) => acc + val),
  reduce((acc, val) => acc + val)
);
observable$.subscribe(console.log);
