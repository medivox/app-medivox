import Immutable from 'immutable';
import begin_session from './begin_session';
import end_session from './end_session';
import biometric_intent from './biometric_intent';
import symptom_intent from './symptom_intent';

export default function process_intent(state, data, previous_states) {

  console.log(data);
  if (!data || !data.result || !data.result.action) {
    // No good response
    return state;
  }

  const action = data.result.action;

  if (action.startsWith('patient.biometric')) {
    previous_states.push(state);
    return biometric_intent(action, state, data);
  }

  switch (action) {
    case 'undo': {
      const previous = previous_states.pop();

      if (previous) {
        return previous;
      }

      break;
    }
    case 'begin.session': return begin_session(state, data);
    case 'end.session': return end_session(state, data);
    case 'patient.symptom': {
      previous_states.push(state);
      return symptom_intent(state, data);
    }
    default: break;
  }

  return state;
  //
  //return state.merge({'last_intent': Immutable.fromJS(data)});
}