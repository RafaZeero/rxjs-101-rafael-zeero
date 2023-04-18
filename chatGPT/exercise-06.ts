/**
 * Create an RxJS program that takes an array of objects and emits only the objects where the type property is 'dog'.
 */
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const animals = [
  { name: 'Fluffy', type: 'cat' },
  { name: 'Fido', type: 'dog' },
  { name: 'Spot', type: 'dog' },
  { name: 'Mr. Whiskers', type: 'cat' }
];
const observable$ = from(animals).pipe(filter(animal => animal.type === 'dog'));
observable$.subscribe(console.log);
