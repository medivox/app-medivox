

export default function begin_session(state, data) {
  if (state.get('patient') || !data || !data.result || !data.result.parameters) {
    return state;
  }

  const first = data.result.parameters.first || '';
  const last = data.result.parameters.last || '';

  const patientId = `${first.toLowerCase()}-${last.toLowerCase()}`;

  console.log(patientId);

  return state.merge({'patientId': patientId});
}