/**
 * Write an RxJS program that takes a stream of numbers and emits only the numbers that are divisible by 3 or 5.
 */

import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const observable$ = from(numbers).pipe(filter(num => num % 3 === 0 || num % 5 === 0));
observable$.subscribe(console.log);
