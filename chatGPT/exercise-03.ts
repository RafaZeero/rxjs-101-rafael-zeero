/**
 * Write an RxJS program that takes a string and emits each character one at a time.
 */

import { from, of } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const str = 'Hello, world!';
const observable$ = from(str).pipe(concatMap(char => of(char)));
observable$.subscribe(console.log);
