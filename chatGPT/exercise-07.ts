/**
 * Write an RxJS program that takes a stream of mouse clicks and emits the total number of clicks.
 */

import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';

const clicks$ = fromEvent(document, 'click');
const observable$ = clicks$.pipe(scan(count => count + 1, 0));
observable$.subscribe(console.log);
