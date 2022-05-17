
export function createToggle(body, signal) {
  const url = 'https://l3ut0axl99.execute-api.sa-east-1.amazonaws.com/dev/features';
  return fetch(url, {
    method: 'POST',
    signal,
    body: JSON.stringify(body)
  })
    .then((res) => res.json())
}
