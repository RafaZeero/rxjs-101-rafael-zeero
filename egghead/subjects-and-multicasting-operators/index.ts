import {
  AsyncSubject,
  BehaviorSubject,
  Observer,
  ReplaySubject,
  Subject,
  combineLatest,
  connect,
  connectable,
  filter,
  forkJoin,
  interval,
  map,
  merge,
  multicast,
  of,
  share,
  take,
  tap,
  timer
} from 'rxjs';
import { subscribeObject } from '../../utils/functions';

const observer = subscribeObject;

/* * * * * * * * * * * * * * * * * */

// const takeFive$ = interval(1000).pipe(take(5));
// takeFive$.subscribe(observer);

/* * * * * * * * * * * * * * * * * */

// const subjectLike = {
//   next: function (x: any) {
//     this.observers.forEach(o => o.next(x));
//   },
//   error: function (err: any) {
//     this.observers.forEach(o => o.error(err));
//   },
//   complete: function () {
//     this.observers.forEach(o => o.complete());
//   },
//   observers: [] as Array<Observer<any>>,
//   subscribe: function <T>(observer: Observer<T>) {
//     this.observers.push(observer);
//   }
// };

const subject = new Subject();

const observerA: Observer<any> = {
  next: x => console.log('A next: ', x),
  error: err => console.log('A error: ', err),
  complete: () => console.log('A done')
};

const observerB: Observer<any> = {
  next: x => console.log('B next: ', x),
  error: err => console.log('B error: ', err),
  complete: () => console.log('B done')
};

// takeFive$.subscribe(subjectLike);
// subjectLike.subscribe(observerA);
// takeFive$.subscribe(subject);
subject.subscribe(observerA);

setTimeout(() => {
  // subjectLike.subscribe(observerB);
  subject.subscribe(observerB);
}, 2000);

// subject.next(1);
// subject.next(2);

/**
 * FOR VALUE OVER TIME
 *
 * Can remember the latest value emitted.
 * If no value has been emitted, it will fallback to a
 * default value, that is passed when BehaviorSubject is
 * created.
 */
const behaviorSubject = new BehaviorSubject(0);

/**
 * REPLAY EVENTS FROM THE PAST
 *
 * Can see ALL the values emitted.
 * @params bufferSize - Can have a buffer size as initial value so
 * it may see only the last, or the two last, or etc...
 * Doesn't take an initial value.
 *
 * @params windowSize - Second parameter is the window size that dictate
 * for how long will the replay subject remember the latest values in the past
 */
const replaySubject = new ReplaySubject(/* BUFFER SIZE */);

/**
 * Replays one value, only if the observable completes
 *
 * User for heavy computations that uses a lot of CPU, and RAM,
 * and maybe NETWORK REQUESTS
 *
 * An eventual event
 */
const asyncSubject = new AsyncSubject();

const source$ = of(1, 2, 3, 4, 5).pipe(
  tap({
    subscribe: () => console.log('subscription started'),
    next: n => console.log(`source emitted ${n}`)
  })
);

source$.pipe(
  // Notice in here we're merging 3 subscriptions to `shared$`.
  connect(shared$ =>
    merge(
      shared$.pipe(map(n => `all ${n}`)),
      shared$.pipe(
        filter(n => n % 2 === 0),
        map(n => `even ${n}`)
      ),
      shared$.pipe(
        filter(n => n % 2 === 1),
        map(n => `odd ${n}`)
      )
    )
  )
);
// .subscribe(console.log);

/**
 * Change MULTICAST operator with SHARE or CONNECT
 */
// const connectableObservable$ = interval(1000).pipe(take(5), multicast(new Subject()));
const double = (x: number) => x * 2;
const triple = (x: number) => x * 3;
const connectableObservable$ = interval(1000).pipe(
  take(5),
  share({ connector: () => new Subject() }),
  connect(shared$ => merge(shared$.pipe(map(double)), shared$.pipe(map(triple))))
);
const withConnectable = timer(1_000).pipe(
  connect(source => combineLatest([source, source]), { connector: () => new ReplaySubject(1) })
);

// share = publish() + refcount()

/* * * * * * * * * * * * * * * */
/* PUBLISH IS DEPRECATED IN V8 */
/* * * * * * * * * * * * * * * */

// publish = connect + Subject
// publishReplay = connect + ReplaySubject
// publishBehavior = connect + BehaviorSubject
// publishLast = connect + AsyncSubject

const subConnectable = withConnectable.subscribe(observer);

setTimeout(() => {
  subConnectable.unsubscribe();
}, 5_000);

// connectableObservable$.subscribe(observer);
