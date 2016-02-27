import * as types from '../constants';
import R from 'ramda';

const createActionWithData = R.assoc('type');

export function bootstrap(data) {
  return createActionWithData(types.BOOTSTRAP, data);
}

export function plusOne() {
  return { type: types.PLUS_ONE };
}

export function minusOne() {
  return { type: types.MINUS_ONE };
}
