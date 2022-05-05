
export function listRoles(signal) {
  const url = 'https://l3ut0axl99.execute-api.sa-east-1.amazonaws.com/dev/roles';
  return fetch(url, { method: 'GET', signal })
    .then(response => response.json());
}
