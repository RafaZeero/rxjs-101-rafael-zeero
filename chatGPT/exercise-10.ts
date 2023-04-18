/**
 * Create an RxJS program that takes a stream of strings and emits the longest string in the stream.
 */

import { from } from 'rxjs';
import { reduce } from 'rxjs/operators';

const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const observable$ = from(strings).pipe(reduce((acc, val) => (acc.length > val.length ? acc : val)));
observable$.subscribe(console.log);
