/**
 * Write an RxJS program that takes a stream of numbers and emits the number that appears the most frequently.
 * If there are multiple numbers that appear with the same maximum frequency, emit all of them.
 *
 * Hint: you may need to use multiple operators and create intermediate observables to solve this problem.
 */
import { from } from 'rxjs';
import { scan, mergeMap, groupBy, toArray, reduce, map } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 2, 3, 3];
const observable$ = from(numbers).pipe(
  groupBy(val => val),
  mergeMap(group$ => group$.pipe(toArray())),
  reduce((acc, curr) => (curr.length > acc.length ? curr : acc), []),
  map(arr => arr[0])
);
observable$.subscribe(console.log);
