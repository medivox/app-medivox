import * as types from '../constants';
import R from 'ramda';

const createActionWithData = R.assoc('type');

export function bootstrap(data) {
  return createActionWithData(types.BOOTSTRAP, data);
}

export function plusOne() {
  return { type: types.PLUS_ONE };
}

function newPhrase(phrase) {
  return {type: types.SET_PHRASE, phrase};
}

export function getIntent(phrase) {
  return (dispatch, getState) => {
    jQuery.ajax({
      type: "POST",
      url: types.API_AI_BASE_URL + "query/",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      headers: {
        "Authorization": "Bearer " + types.API_AI_ACCESS_TOKEN,
        "ocp-apim-subscription-key": types.API_AI_SUBSCRIPTION_KEY
      },
      data: JSON.stringify({ q: phrase.trim(), lang: "en" }),
      success: function(data) {
        dispatch({type: types.GET_INTENT, data});
      },
      error: function() {
        console.log("Internal Server Error");
        dispatch({type: types.INTENT_ERROR});
      }
    });
  }
}

export function minusOne() {
  return { type: types.MINUS_ONE };
}


export function getPatient(patientId) {
  return (dispatch, getState) => {
    if (!(patientId === 'anna-jones' || patientId === 'john-doe')) {
      dispatch({type: types.ERROR, error: 'Patient Not Found'});
    } else {

      jQuery.ajax({
        type: "GET",
        url: 'https://brilliant-heat-5253.firebaseio.com/' + ((patientId === 'anna-jones') ? 'doe' : 'john')  + '.json',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
          dispatch({type: types.LOAD_PATIENT, data});
        },
        error: function () {
          dispatch({type: types.ERROR, error: 'Unable to retrieve Patient Data'});
        }
      });

    }
  }
}