import axios from 'axios';
import { Base64 } from 'js-base64';

export const LANG = ['text', 'cpp', 'python', 'java', 'javascript', 'markdown'];

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

export async function uploadCode(code, lang) {
  const { data } = await api.post('/', {
    body: Base64.encodeURI(code),
    lang
  });
  return data;
}

export async function getCode(token) {
  const {
    data: { body, lang }
  } = await api.get(`/${token}`);
  if (LANG.includes(lang)) {
    return {
      body: Base64.decode(body),
      lang
    };
  } else {
    throw new Error('lang error');
  }
}
