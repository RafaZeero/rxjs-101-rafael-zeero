/**
 * Create an RxJS program that takes two arrays and emits their contents as a single stream.
 */

import { from } from 'rxjs';
import { concatWith } from 'rxjs/operators';

const arr1 = [1, 2, 3];
const arr2 = ['a', 'b', 'c'];
const observable$ = from(arr1).pipe(concatWith(from(arr2)));
observable$.subscribe(console.log);
