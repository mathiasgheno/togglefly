
export function listFeatures(signal) {
  const url = 'https://l3ut0axl99.execute-api.sa-east-1.amazonaws.com/dev/features';
  return fetch(url, { method: 'GET', signal })
    .then((res) => res.json())
}
