export function handlerSuccess(event) {
  console.log(event);
  return function (feature) {
    return {
      statusCode: 200,
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
