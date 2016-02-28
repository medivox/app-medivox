import Immutable from 'immutable';

export default function process_intent(state, data) {
  return state.update('last_intent', Immutable.fromJS(data));
}