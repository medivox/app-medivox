import { BOOTSTRAP, SET_PHRASE,
  GET_INTENT, ERROR, LOAD_PATIENT } from '../constants';
import Immutable from 'immutable';
import R from 'ramda';
import process_intent from './process_intent';
import moment from 'moment';

const initialState = Immutable.Map({
  value: 0
});

const removeType = R.dissoc('type');

const previous_states = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case BOOTSTRAP:
      return state.merge(removeType(action));

    case SET_PHRASE:
      return state.merge(removeType(action));

    case GET_INTENT:
      return process_intent(state, action.data, previous_states);

    case LOAD_PATIENT:
    {
      const patient = action.data;
      patient.sessions.push({
        date: moment().format('YYYY-MM-DD'),
        biometrics: [],
        symptoms: [],
        prescriptions: [],
        appointments: [],
        labs: []
      });
      return state.merge({patient});
    }

    case ERROR:
      return state.merge({error: action.error});

    default:
      return state;
  }
}
