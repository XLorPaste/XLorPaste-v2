import axios from 'axios';
import { Base64 } from 'js-base64';

const TokenHistory = 'Tokens';

export function tokenHistory() {
  const tokens_ = window.localStorage.getItem(TokenHistory);
  return tokens_ ? JSON.parse(tokens_) : [];
}

function pushToken(token) {
  const tokens = tokenHistory();
  const tokenSet = new Set(tokens);
  if (!tokenSet.has(token)) {
    window.localStorage.setItem(
      TokenHistory,
      JSON.stringify([token, ...tokens])
    );
  }
}

export const LANG = [
  'text',
  'cpp',
  'python',
  'java',
  'javascript',
  'markdown',
  'json'
];

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL
});

export async function uploadCode(code, lang) {
  try {
    const { data } = await api.post('/', {
      body: Base64.encodeURI(code),
      lang
    });
    return [data, undefined];
  } catch (err) {
    return [undefined, '上传失败'];
  }
}

export async function getCode(token) {
  try {
    const {
      data: { body, lang }
    } = await api.get(`/${token}`);
    if (LANG.includes(lang)) {
      pushToken(token);
      return [
        {
          body:
            lang !== 'json'
              ? Base64.decode(body)
              : JSON.stringify(JSON.parse(Base64.decode(body)), null, 2),
          lang
        },
        undefined
      ];
    } else {
      return [undefined, `代码语言 ${lang} 不存在`];
    }
  } catch (err) {
    let msg = '服务器错误';
    if (err.response && err.response.status === 404) {
      msg = 'Token 不合法';
    }
    return [undefined, msg];
  }
}
