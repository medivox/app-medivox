import Immutable from 'immutable';

export default function appointment_intent(state, data) {
  if (!state.get('patient') || !data || !data.result || !data.result.parameters) {
    return state;
  }

  const patient = state.get('patient').toJS();

  const todaySession = patient.sessions[patient.sessions.length - 1];
  const todaySessionAppointments = todaySession.appointments || [];

  todaySessionAppointments.push([
    data.result.parameters.moment
  ]);

  todaySession.appointments = todaySessionAppointments;

  return state.set('patient',Immutable.fromJS(patient));
}