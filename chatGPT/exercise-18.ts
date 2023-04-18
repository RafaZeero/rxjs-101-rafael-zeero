/**
 * Create an RxJS program that takes a stream of objects with
 * a "name" property and emits the names of the objects in alphabetical order.
 */
import { from } from 'rxjs';
import { pluck, map, reduce } from 'rxjs/operators';

const objects = [
  { name: 'John' },
  { name: 'Mary' },
  { name: 'Bob' },
  { name: 'Alice' },
  { name: 'Mike' }
];
const observable$ = from(objects).pipe(
  pluck('name'),
  reduce((acc, val) => [...acc, val], []),
  map(arr => arr.sort())
);
observable$.subscribe(console.log);
