

export default function end_session(state, data) {
  if (!state.get('patient')) {
    return state;
  }

  const patientToSave = state.get('patient');

  return state.merge({
    'patientId': null,
    'patient': null,
    'patientToSave': patientToSave,
    'savingPatient': false
  });
}