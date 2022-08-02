import React from 'react';

const getBrowserRoute = () => window.location.hash.split('?')[0] || '#/home';

const getQuery = () => {
  const queriesString = window.location.hash.split('?')[1];
  const queries = queriesString ? queriesString.split('&') : [];
  return queries.reduce((acc, query) => {
    const [key, value] = query.split('=');
    acc[key] = value;
    return acc;
  }, {});
};

export const matchWith = (route) => (...paths) => {
  return paths.some(path => {
    const haveSameSize = path.split('/').length === route.split('/').length;
    if(!haveSameSize) return false;
    const haveParameter = path.includes(':');
    if(haveParameter) {
      const allElementsOfRoute = path.split('/');
      console.log(allElementsOfRoute);
      return allElementsOfRoute.every((element, index) => {
        if(element.includes(':')) {
          return true;
        }
        return element === route.split('/')[index];
      })
    }
    return path === route;
  });
}

/**
 * @description I'm usuming that the system router and the browser router are the same.
 * @param route
 */
export const getParams = (route = getBrowserRoute()) => (path) => {
  // const validator = ducto(
  //   hasSameType,
  //   hasSameLength,
  //   isNotUndefined,
  //   isNotNull,
  //   isNotEmpty,
  // )
  // validator(route, path);

  if(!route) return {};
  if(!path) return {};

  const allElementsOfRoute = route?.split?.('/');
  const allElementsOfPath = path?.split?.('/');
  return allElementsOfPath?.reduce((acc, subpath, index) => {
    if(subpath.includes(':')) {
      const paramName = subpath.replace(':', '');
      acc[paramName] = allElementsOfRoute[index];
    }
    return acc;
  }, {});
};

export const useHashedRouter = () => {
  const [ route, setRoute ] = React.useState(getBrowserRoute());

  const handleRouteChanges = () => {
    const route = getBrowserRoute();
    setRoute(route);
  }

  React.useEffect(() => {
    window.addEventListener('popstate', handleRouteChanges);
    return () => window.removeEventListener('popstate', handleRouteChanges);
  }, []);

  return {
    route,
    getQuery: getQuery,
    matchWith: matchWith(route),
    getParams: getParams(route),
  };
}


// console.log(matchWith('#/filmes/10')('#/filmes/:id'))
// console.log(getParams('#/filmes/10/atores/20')('#/filmes/:filme/atores/:ator'));
