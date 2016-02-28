import { searchList } from '../helper';
import Immutable from 'immutable';

export default function symptom_intent(state, data) {
  if (!state.get('patient') || !data || !data.result || !data.result.parameters) {
    return state;
  }

  const patient = state.get('patient').toJS();

  const todaySession = patient.sessions[patient.sessions.length - 1];
  const todaySessionSymptoms = todaySession.symptoms || [];

  todaySessionSymptoms.push([
    data.result.parameters.symptom,
    data.result.parameters.cause
  ]);

  todaySession.symptoms = todaySessionSymptoms;

  return state.set('patient',Immutable.fromJS(patient));
}