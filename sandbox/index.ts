import { interval, mergeMap, of, EMPTY, tap } from 'rxjs';

const showLog =
  (message: string = 'Value: ') =>
  (value: any) =>
    console.log(message, value);

const interval$ = interval(1000);
const result = interval$.pipe(
  tap(showLog('reading value: ')),
  mergeMap(x => (x % 2 === 1 ? of('a', 'b', 'c') : EMPTY))
);
result.subscribe(console.log);
