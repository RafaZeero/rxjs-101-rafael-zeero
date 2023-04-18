/**
 * Create an RxJS program that takes a stream of strings and emits only the strings that have a length greater than or equal to 5.
 */

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const strings = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const observable$ = from(strings).pipe(filter(str => str.length >= 5));
observable$.subscribe(console.log);
