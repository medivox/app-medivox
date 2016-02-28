import { BOOTSTRAP, SET_PHRASE, GET_INTENT, INTENT_ERROR } from '../constants';
import Immutable from 'immutable';
import R from 'ramda';
import process_intent from './process_intent';

const initialState = Immutable.Map({
  value: 0
});

const removeType = R.dissoc('type');

export default function(state = initialState, action) {
  switch (action.type) {
    case BOOTSTRAP:
      return state.merge(removeType(action));

    case SET_PHRASE:
      return state.merge(removeType(action));

    case GET_INTENT:
      return process_intent(state, action.data);

    case INTENT_ERROR:
      return state.merge({intentError: true});

    default:
      return state;
  }
}
