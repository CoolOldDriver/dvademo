import {stringify as queryStringify } from 'querystring';
import fetch from 'dva/fetch';
import { notification } from 'antd';

const endUrl=`${window.baseURL}`;

const condeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errorText = condeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误${response.status}: ${response.url}`,
    description: errorText,
  });
  const error = new Error(errorText);
  error.response = response;
  throw error;
}
// function checkSuccess(response){
//   return response;
// }
// function handleError(err){
//   throw err;
// }
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export function post_bac(url, data) {
  return request(endUrl + url,
    { method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'credentials': 'include'
      },
      body: JSON.stringify(data)
  })
}

export function post(url, data) {
  const defaultOptions = {
    credentials: 'include',
    method: 'POST'
  };
  const newOptions = { ...defaultOptions };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(data);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then((response) => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    }).catch( e => {
      const status = e.name;
      if(status <= 504 && status >= 500){
        alert("系统500");
        return;
      }
    });

}

export function get(url, query) {
    return request(`${endUrl + url}?${queryStringify(query)}`, {
      method: 'GET',
      credentials: 'same-origin'
    });
  }

  export function loginRedirect() {
    let currentUrl = window.location.href;
    window.location.href = '/login?backUrl=' + encodeURIComponent(currentUrl);
  }