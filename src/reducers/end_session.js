

export default function end_session(state, data) {
  if (!state.get('patient')) {
    return state;
  }

  return state.merge({'patientId': null, 'patient': null});
}