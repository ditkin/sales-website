import { HashRouteProvider } from './HashRouteContext';
import Router from './Router';

export function App() {
  return (
    <HashRouteProvider>
      <Router />
    </HashRouteProvider>
  );
}
