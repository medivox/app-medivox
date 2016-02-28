

export default function end_session_nosave(state, data) {
  if (!state.get('patient')) {
    return state;
  }

  return state.merge({
    'patientId': null,
    'patient': null
  });
}