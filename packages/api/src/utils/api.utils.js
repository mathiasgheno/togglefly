export function handlerSuccess(event) {
  console.log(event);
  return function (feature) {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(feature),
    }
  }
}

export function handlerError(event) {
  return function (feature) {
    return {
      statusCode: 200,
      body: JSON.stringify(feature),
    }
  }
}
