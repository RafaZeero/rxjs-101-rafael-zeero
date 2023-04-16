import { fromEvent, interval, map, of, take } from 'rxjs';
import { subscribeObject } from '../../utils/functions';

const subFn = subscribeObject;

// * Observables part 1
const numObservable = interval(1000).pipe(take(4));
const higherOrderObservable = numObservable.pipe(map(x => of(x)));
// higherOrderObservable.subscribe(subFn);

const click$ = fromEvent(document, 'click');
const clock$ = click$.pipe(map(() => interval(1000)));

/** Not very practical. Must refactor */
clock$.subscribe(x => x.subscribe(subFn));
