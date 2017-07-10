import Config from "./config";

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    throwError(response);
  }
}

function throwError(response) {
  var error = new Error(response.msg);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function handleFetch(params){
  // 允许get方法直接传url
  if (_.isString(params)) {
    params = {'path': params};
  };

  let time = new Date().getTime();
  let hash = '';
  if (params.path.indexOf('?') > -1) {
      hash = `&t=${time}`;
  } else {
      hash = `?t=${time}`;
  };
  params.path += hash;
  params.path = encodeURI(params.path);

  let option = {
    url: Config.API_SERVER + params.path,
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  _.assignIn(option, params);

  if ((["POST", "PUT", "DELETE", "OPTIONS"].indexOf(option.method.toUpperCase()) > -1) && option.body) {
    option.body = JSON.stringify(option.body);
  }

  return fetch(option.url, option)
    .then(checkStatus)
    .then(parseJSON)
}

export default handleFetch;
