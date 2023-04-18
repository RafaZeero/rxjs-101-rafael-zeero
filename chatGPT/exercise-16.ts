/**
 * Create an RxJS program that takes a stream of strings and emits only
 * the strings that are palindromes (words that read the same backwards as forwards).
 */

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const strings = ['racecar', 'apple', 'level', 'banana', 'deified'];
const observable$ = from(strings).pipe(filter(str => str === str.split('').reverse().join('')));
observable$.subscribe(console.log);
