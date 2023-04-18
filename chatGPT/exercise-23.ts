/**
 * Write an RxJS program that takes a stream of strings and
 * emits the longest sequence of consecutive alphabetical characters in each string.
 */
import { from } from 'rxjs';
import { scan, distinctUntilChanged, filter } from 'rxjs/operators';

const observable$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]).pipe(
  scan(
    (acc, val) => {
      const fib = [1, 1];
      while (fib[fib.length - 1] < val) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(next);
      }
      return fib;
    },
    [1]
  ),
  distinctUntilChanged(),
  filter(fib => fib[fib.length - 1] !== 1)
);
observable$.subscribe(console.log);
