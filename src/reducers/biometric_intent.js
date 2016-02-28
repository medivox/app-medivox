import { searchList } from '../helper';
import Immutable from 'immutable';

export default function biometric_intent(biometric, state, data) {
  if (!state.get('patient') || !data || !data.result || !data.result.parameters) {
    return state;
  }

  const patient = state.get('patient').toJS();

  const todaySession = patient.sessions[patient.sessions.length - 1];
  const todaySessionBiometrics = todaySession.biometrics || [];

  const index = searchList(todaySessionBiometrics, biometric);
  if (index >= 0) {
    todaySessionBiometrics[index] = [biometric, data.result.parameters];
  } else {
    todaySessionBiometrics.push([biometric, data.result.parameters]);
  }

  todaySession.biometrics = todaySessionBiometrics;

  return state.set('patient',Immutable.fromJS(patient));
}