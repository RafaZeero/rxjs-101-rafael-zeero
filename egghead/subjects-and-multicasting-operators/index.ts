import { BehaviorSubject, Observer, ReplaySubject, Subject, interval, take } from 'rxjs';
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

subject.next(1);
subject.next(2);

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
