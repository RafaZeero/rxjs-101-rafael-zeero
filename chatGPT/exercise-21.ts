/**
 * Write an RxJS program that takes a stream of strings
 * and emits the string with the longest length seen so far.
 */
import { from } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

const strings = ['apple', 'banana', 'orange', 'pear', 'grape'];
const observable$ = from(strings).pipe(
  scan((acc, val) => (val.length > acc.length ? val : acc), ''),
  reduce((acc, val) => val, '')
);
observable$.subscribe(console.log);
