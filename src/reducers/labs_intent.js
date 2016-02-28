import Immutable from 'immutable';

export default function labs_intent(state, data) {
  if (!state.get('patient') || !data || !data.result || !data.result.parameters) {
    return state;
  }

  const patient = state.get('patient').toJS();

  const todaySession = patient.sessions[patient.sessions.length - 1];
  const todaySessionLabs = todaySession.labs || [];

  todaySessionLabs.push([
    data.result.parameters.test
  ]);

  todaySession.labs = todaySessionLabs;

  return state.set('patient',Immutable.fromJS(patient));
}