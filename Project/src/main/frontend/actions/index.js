import axios from 'axios';


export const FETCH_DATA = 'fetch_city';
export const POST_ANSWER = 'post_answer';
export const CREATE_USER = 'create_user';
export const LOGIN_USER = 'login_user';
export const GET_USER = 'get_user';
export const LOGOUT_USER = 'logout_user';
export const UPDATE_HIGHSCORE = 'update_highscore';
export const GET_ERROR = 'get_error';

// const ROOT_URL = 'https://kewlkvis.herokuapp.com/API';
const ROOT_URL = 'http://localhost:8080/API';

export function fetchQuestion() {
  const request = axios.get(`${ROOT_URL}/question`);

  return {
    type: FETCH_DATA,
    payload: request,
  };
}

export function postAnswer(value) {
  const feedback = {
    answer: value,
  };

  const postrequest = axios.post(`${ROOT_URL}/answer/question`, feedback);

  return {
    type: POST_ANSWER,
    payload: postrequest,
  };
}
export function postLocation(value) {
  const postrequest = axios.post(`${ROOT_URL}/userLocation`, value);

  return {
    type: POST_ANSWER,
    payload: postrequest,
  };
}

export function createUser(value) {
  const postRequest = axios.post(`${ROOT_URL}/signup`, value);


  return {
    type: CREATE_USER,
    payload: postRequest,
  };
}

export function loginUser(value) {
  const postRequest = axios.post(`${ROOT_URL}/login`, value);


  return {
    type: LOGIN_USER,
    payload: postRequest,
  };
}
export function logoutUser(value) {
  const postRequest = axios.post(`${ROOT_URL}/logout`, value);


  return {
    type: LOGOUT_USER,
    payload: postRequest,
  };
}
export function maybeUpdateHighScore(value) {
  const postRequest = axios.post(`${ROOT_URL}/updateScore`, value);


  return {
    type: UPDATE_HIGHSCORE,
    payload: postRequest,
  };
}

export function getUserPage() {
  const request = axios.get(`${ROOT_URL}/currentuser`);

  return {
    type: GET_USER,
    payload: request,
  };
}

export function listenForError() {
  const request = axios.get(`${ROOT_URL}/error`);

  return {
    type: GET_ERROR,
    payload: request,
  };
}
