import Immutable from 'immutable';

export default function prescription_intent(state, data) {
  if (!state.get('patient') || !data || !data.result || !data.result.parameters) {
    return state;
  }

  const patient = state.get('patient').toJS();

  const todaySession = patient.sessions[patient.sessions.length - 1];
  const todaySessionPrescriptions = todaySession.prescriptions || [];

  todaySessionPrescriptions.push([
    data.result.parameters.medicine,
    data.result.parameters.period || 1,
    data.result.parameters['period-unit'] || 'day'
  ]);

  todaySession.prescriptions = todaySessionPrescriptions;

  return state.set('patient',Immutable.fromJS(patient));
}