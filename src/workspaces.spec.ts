import { expect } from 'expect';
import { incMeaningOfLife } from './workspaces';

it('howdy', () => {
  expect(incMeaningOfLife()).toBe(43);
});
