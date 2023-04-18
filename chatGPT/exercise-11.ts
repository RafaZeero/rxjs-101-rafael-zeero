/**
 * Write an RxJS program that takes a stream of numbers and emits the sum of the squares of all the odd numbers.
 */
import { from } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const observable$ = from(numbers).pipe(
  filter(num => num % 2 !== 0),
  map(num => num * num),
  reduce((acc, val) => acc + val)
);
observable$.subscribe(console.log);
