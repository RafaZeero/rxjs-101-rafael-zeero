import { Observable, catchError, filter, interval, map, of, repeat, retry, take, zip } from 'rxjs';

const subObj = {
  next: (x: any) => console.log('next ' + x),
  error: (err: any) => console.log('error ' + err),
  complete: () => console.log('done')
};

const foo$ = zip(interval(500), of('a', 'b', 'c', 'd', 'e')).pipe(
  map(([x, y]) => y),
  take(5)
);

/* ########################################## */
/* Error Handling */
/* Catch Error */

const error$ = interval(500).pipe(map(Math.random));
const maybeNumber = (x: number) => (x < 0.3 ? x : new Error('Very high number'));

const catchError$ = error$.pipe(
  map(maybeNumber),
  catchError(error => of(error))
);

/* Now retrying the value without throwing error */

const catchError2$ = error$.pipe(
  map(maybeNumber),
  catchError((error, outputObs) => outputObs),
  filter(x => !(x instanceof Error)), // filtering errors!
  retry()
);

const resultError = catchError2$;

// resultError.subscribe(subObj);

/* ########################################## */
/* Retry & Repeat*/

const repeat$ = foo$;

const resultRepeat = repeat$.pipe(repeat());

resultRepeat.subscribe(subObj);
