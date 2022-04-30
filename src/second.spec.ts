import { expect } from 'expect';
import * as library from './index';

it('howdy', () => {
  expect(library.hello('Howdy')).toBe('Howdy world');
});
