import { createContext, ComponentChildren } from 'preact';
import { useCallback, useMemo, useState } from 'preact/hooks';
import { PRODUCTS } from './constants/routes';

type QueryParams = { [key: string]: string };

interface QueryParamContextInterface {
  queryParams: QueryParams;
  handleQueryParamChange: (newRoute: string) => void;
}

const QueryParamContext = createContext<QueryParamContextInterface>({
  queryParams: {},
  handleQueryParamChange: () => {},
});

function getQueryParamsObject(search: string): QueryParams {
  return search
    .substring(1)
    .split('&')
    .map((stringWithEquals: string) => stringWithEquals.split('='))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}

export function getQueryParams(): QueryParams {
  return getQueryParamsObject(window.location.search);
}

// type ChildrenProps = {
//   children: ComponentChildren;
// };

// function QueryParamsProvider({ children }: ChildrenProps) {
//   const [queryParams, setQueryParams] = useState(getQueryParams());

//   const handleQueryParamChange = useCallback((newQueryParams: string) => {
//     setQueryParams(newQueryParams);
//     window.location.hash = newRoute;
//   }, []);

//   // memoize value object to prevent rerenders
//   const contextValueObject = useMemo(
//     () => ({
//       route,
//       handleQueryParamChange,
//     }),
//     [route, handleQueryParamChange]
//   );

//   return (
//     <QueryParamContext.Provider value={contextValueObject}>
//       {children}
//     </QueryParamContext.Provider>
//   );
// }

// export { QueryParamContext, QueryParamsProvider };
