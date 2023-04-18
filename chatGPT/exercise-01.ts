/**
 *
 * Write a simple RxJS program that emits the numbers 1, 2, and 3, then completes.
 *
 */

import { of } from 'rxjs';

const observable$ = of(1, 2, 3);
observable$.subscribe(console.log);
