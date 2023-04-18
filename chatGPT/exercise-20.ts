/**
 * Create an RxJS program that takes a stream of objects with
 * "name" and "age" properties, and emits the name of the oldest person seen so far.
 */

import { from } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

const people = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 30 },
  { name: 'Bob', age: 40 },
  { name: 'Alice', age: 35 },
  { name: 'Mike', age: 28 }
];
const observable$ = from(people).pipe(
  scan((acc, val) => (val.age > acc.age ? val : acc), { name: '', age: 0 }),
  reduce((acc, val) => val.name, '')
);
observable$.subscribe(console.log);
