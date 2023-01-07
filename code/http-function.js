import {response} from 'wix-http-functions';

export function use_myFunction(request) {

  let options = {
    status: 418,
    body: {
      "key1": "value1",
      "key2": "value2"
    },
    headers: {
      "Content-Type": "application/json"
    }
  };

  return response(options);
}
