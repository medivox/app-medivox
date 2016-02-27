import { BOOTSTRAP, PLUS_ONE, MINUS_ONE } from '../constants';
import Immutable from 'immutable';
import R from 'ramda';

const initialState = Immutable.Map({
  value: 0
});

const removeType = R.dissoc('type');

export default function(state = initialState, action) {
  switch (action.type) {
    case BOOTSTRAP:
      return state.merge(removeType(action));

    case PLUS_ONE:
      return state.merge({ value: state.get('value') + 1 });

    case MINUS_ONE:
      return state.merge({ value: state.get('value') - 1 });

    default:
      return state;
  }
}
