/**
 *
 * Create an RxJS program that takes an array of numbers and emits only the even numbers.
 *
 */

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const observable$ = from(numbers).pipe(filter(num => num % 2 === 0));
observable$.subscribe(console.log);
