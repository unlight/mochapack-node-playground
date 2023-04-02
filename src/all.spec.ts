import expect from 'expect';

import { hello } from './index';
import { meaningOfLife } from './foo';

it('meaningOfLife', () => {
  expect(meaningOfLife).toEqual(42);
});

it('hello test', () => {
  expect(hello()).toEqual('Hello world');
});
